import React from "react";
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban";
import "./KanbanBoard.css";

const kanbanData = [
  {
    Id: "Task 1",
    Status: "To Do",
    Summary: "Design the login screen",
    Assignee: "John",
  },
  {
    Id: "Task 2",
    Status: "In Progress",
    Summary: "Develop the backend APIs",
    Assignee: "Jane",
  },
  {
    Id: "Task 3",
    Status: "Testing",
    Summary: "Unit testing for user module",
    Assignee: "Alice",
  },
  {
    Id: "Task 4",
    Status: "Done",
    Summary: "Project setup completed",
    Assignee: "Bob",
  }, {
    Id: "Task 1",
    Status: "To Do",
    Summary: "Design the login screen",
    Assignee: "John",
  },
  {
    Id: "Task 2",
    Status: "In Progress",
    Summary: "Develop the backend APIs",
    Assignee: "Jane",
  },
  {
    Id: "Task 3",
    Status: "Testing",
    Summary: "Unit testing for user module",
    Assignee: "Alice",
  },
  {
    Id: "Task 4",
    Status: "Done",
    Summary: "Project setup completed",
    Assignee: "Bob",
  }, {
    Id: "Task 1",
    Status: "To Do",
    Summary: "Design the login screen",
    Assignee: "John",
  },
  {
    Id: "Task 2",
    Status: "In Progress",
    Summary: "Develop the backend APIs",
    Assignee: "Jane",
  },
  {
    Id: "Task 3",
    Status: "Testing",
    Summary: "Unit testing for user module",
    Assignee: "Alice",
  },
  {
    Id: "Task 4",
    Status: "Done",
    Summary: "Project setup completed",
    Assignee: "Bob",
  },
];

export default function KanbanBoard() {
  return (
    <div className="kanban-container">
      <h2>🗂️ Kanban Board</h2>
      <KanbanComponent
        id="kanban"
        keyField="Status"
        dataSource={kanbanData}
        cardSettings={{ contentField: "Summary", headerField: "Id" }}
      >
        <ColumnsDirective>
          <ColumnDirective headerText="To Do" keyField="To Do" />
          <ColumnDirective headerText="In Progress" keyField="In Progress" />
          <ColumnDirective headerText="Testing" keyField="Testing" />
          <ColumnDirective headerText="Done" keyField="Done" />
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
}
