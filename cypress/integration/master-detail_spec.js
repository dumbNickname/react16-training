describe("Master detail view", () => {
  const books = [
    {id: 1, authors: 'a1', title: 't1'},
    {id: 2, authors: 'a2', title: 't2'},
  ];
  
  const author = "John Wick";
  const title = "Revenge";

  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });



  describe("Book Overview table", () => {
    it("should display all books", () => {
      cy.get("table thead")
        .find("tr")
        .should("have.length", 1)
        .within(() => {
          cy.get('th').eq(0).should("have.text", '#');
          cy.get('th').eq(1).should("have.text", 'Authors');
          cy.get('th').eq(2).should("have.text", 'Title');
        });

      cy.get("table tbody")
        .find("tr")
        .should("have.length", books.length);
        
        books.forEach((book, index) => {
          cy.get("table tbody")
            .find("tr")
            .eq(index)
            .within(() => {
              cy.get('td').eq(0).should("have.text", (index+1).toString());
              cy.get('td').eq(1).should("have.text", book.authors);
              cy.get('td').eq(2).should("have.text", book.title);
            });  
      })  
    });
  });

  describe("Book Details", () => {
    beforeEach(() => {
      cy.get("table tbody")
        .find("tr")
        .eq(0)
        .click();
    });

    it("should have two form groups with inputs", () => {
      cy
        .get("form")
        .find(".form-group")
        .should("have.length", 2)
        .within(() => {
          cy.get("label").should("have.length", 2);
          cy.get("input").should("have.length", 2);
        });
    });

    it("should have authors form group", () => {
      cy
        .get("form .form-group")
        .first()
        .find("label[for=authors]")
        .should("have.text", "Authors:");

      cy
        .get("form .form-group")
        .first()
        .find("input[id=authors]")
        .should("have.value", books[0].authors);
    });

    it("authors input should allow to enter characters", () => {
      cy
        .get("form .form-group input[id=authors]")
        .clear()
        .type(author)
        .should("have.value", author);
    });

    it("should have title form group", () => {
      cy
        .get("form .form-group")
        .last()
        .find("label[for=title]")
        .should("have.text", "Title:");
      cy
        .get("form .form-group")
        .last()
        .find("input[id=title]")
        .should("have.value", books[0].title);
    });

    it("title input should allow to enter characters", () => {
      cy
        .get("form .form-group input[id=title]")
        .clear()
        .type(title)
        .should("have.value", title);
    });

    describe("Preview helper area", () => {
      it('authors input "data binding" works', () => {
        cy.get("form .form-group input[id=authors]").clear().type(author);
        cy
          .get("form")
          .next()
          .find("span")
          .last()
          .should("contain", author);
      });

      it('title input "data binding" works', () => {
        cy.get("form .form-group input[id=title]").clear().type(title);
        cy
          .get("form")
          .next()
          .find("span")
          .last()
          .should("contain", title);
      });
    });
  });

  describe("Book Overview and BookDetails interaction", () => {
    beforeEach(() => {
      cy.get("table tbody")
        .find("tr")
        .eq(0)
        .click();
    })
    it("should display currently selected book", () => {
      const selectedBookIndex = 1;

      cy.get("table tbody")
        .find("tr")
        .eq(selectedBookIndex)
        .click();

      cy
        .get("form .form-group input[id=title]")
        .should("have.value", books[selectedBookIndex].title);
      cy
        .get("form .form-group input[id=authors]")
        .should("have.value", books[selectedBookIndex].authors);
    });

    it("should save modified book and update it in table", () => {
      cy
        .get("form .form-group input[id=authors]")
        .clear()
        .type(author);
      cy
        .get("button")
        .click();

      cy.get("table tbody tr")
        .first()
        .find('td')
        .eq(1)
        .should('have.text', author);
    });


    it("should NOT save modified book when save not clicked", () => {
      cy
        .get("form .form-group input[id=authors]")
        .clear()
        .type(author);

      cy.get("table tbody tr")
        .first()
        .find('td')
        .eq(1)
        .should('have.text', books[0].authors);
    });

    it("should load new book properly after edit took place - discard", () => {
      const selectedBookIndex = 1;

      cy
        .get("form .form-group input[id=authors]")
        .clear()
        .type(author);

      cy.get("table tbody")
        .find("tr")
        .eq(selectedBookIndex)
        .click();

      cy
        .get("form .form-group input[id=authors]")
        .should('have.value', books[selectedBookIndex].authors);      
    });

  });
});
