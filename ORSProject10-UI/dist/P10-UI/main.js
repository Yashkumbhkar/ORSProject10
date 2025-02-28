(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _marksheet_marksheet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./marksheet/marksheet.component */ "./src/app/marksheet/marksheet.component.ts");
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./student/student.component */ "./src/app/student/student.component.ts");
/* harmony import */ var _college_college_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./college/college.component */ "./src/app/college/college.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_forgotpassword_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/forgotpassword.component */ "./src/app/login/forgotpassword.component.ts");
/* harmony import */ var _login_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/signup.component */ "./src/app/login/signup.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
/* harmony import */ var _message_message_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./message/message-list.component */ "./src/app/message/message-list.component.ts");
/* harmony import */ var _marksheet_marksheet_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./marksheet/marksheet-list.component */ "./src/app/marksheet/marksheet-list.component.ts");
/* harmony import */ var _college_college_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./college/college-list.component */ "./src/app/college/college-list.component.ts");
/* harmony import */ var _student_student_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./student/student-list.component */ "./src/app/student/student-list.component.ts");
/* harmony import */ var _user_user_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user/user-list.component */ "./src/app/user/user-list.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _role_role_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./role/role.component */ "./src/app/role/role.component.ts");
/* harmony import */ var _course_course_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./course/course.component */ "./src/app/course/course.component.ts");
/* harmony import */ var _subject_subject_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./subject/subject.component */ "./src/app/subject/subject.component.ts");
/* harmony import */ var _role_role_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./role/role-list.component */ "./src/app/role/role-list.component.ts");
/* harmony import */ var _course_course_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./course/course-list.component */ "./src/app/course/course-list.component.ts");
/* harmony import */ var _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./faculty/faculty.component */ "./src/app/faculty/faculty.component.ts");
/* harmony import */ var _faculty_faculty_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./faculty/faculty-list.component */ "./src/app/faculty/faculty-list.component.ts");
/* harmony import */ var _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./timetable/timetable.component */ "./src/app/timetable/timetable.component.ts");
/* harmony import */ var _file_file_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./file/file.component */ "./src/app/file/file.component.ts");
/* harmony import */ var _timetable_timetable_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./timetable/timetable-list.component */ "./src/app/timetable/timetable-list.component.ts");
/* harmony import */ var _subject_subject_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./subject/subject-list.component */ "./src/app/subject/subject-list.component.ts");
/* harmony import */ var _marksheet_marksheetmerit_list_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./marksheet/marksheetmerit-list.component */ "./src/app/marksheet/marksheetmerit-list.component.ts");
/* harmony import */ var _marksheet_getmarksheet_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./marksheet/getmarksheet.component */ "./src/app/marksheet/getmarksheet.component.ts");
/* harmony import */ var _user_changepassword_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./user/changepassword.component */ "./src/app/user/changepassword.component.ts");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/loader/loader.component.ts");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./spinner/spinner.component */ "./src/app/spinner/spinner.component.ts");
/* harmony import */ var _user_myprofile_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./user/myprofile.component */ "./src/app/user/myprofile.component.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./order/order.component */ "./src/app/order/order.component.ts");
/* harmony import */ var _order_orderlist_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./order/orderlist.component */ "./src/app/order/orderlist.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _product_productlist_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./product/productlist.component */ "./src/app/product/productlist.component.ts");
/* harmony import */ var _productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./productdetails/productdetails.component */ "./src/app/productdetails/productdetails.component.ts");
/* harmony import */ var _productdetails_productdetailslist_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./productdetails/productdetailslist.component */ "./src/app/productdetails/productdetailslist.component.ts");
/* harmony import */ var _patient_patient_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./patient/patient.component */ "./src/app/patient/patient.component.ts");
/* harmony import */ var _patient_patientlist_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./patient/patientlist.component */ "./src/app/patient/patientlist.component.ts");
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./company/company.component */ "./src/app/company/company.component.ts");
/* harmony import */ var _company_companylist_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./company/companylist.component */ "./src/app/company/companylist.component.ts");
/* harmony import */ var _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./inventory/inventory.component */ "./src/app/inventory/inventory.component.ts");
/* harmony import */ var _inventory_inventorylist_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./inventory/inventorylist.component */ "./src/app/inventory/inventorylist.component.ts");
/* harmony import */ var _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./supplier/supplier.component */ "./src/app/supplier/supplier.component.ts");
/* harmony import */ var _supplier_supplierlist_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./supplier/supplierlist.component */ "./src/app/supplier/supplierlist.component.ts");
/* harmony import */ var _vehicletracking_vehicletracking_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./vehicletracking/vehicletracking.component */ "./src/app/vehicletracking/vehicletracking.component.ts");
/* harmony import */ var _vehicletracking_vehicletrackinglist_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./vehicletracking/vehicletrackinglist.component */ "./src/app/vehicletracking/vehicletrackinglist.component.ts");
/* harmony import */ var _transportation_transportation_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./transportation/transportation.component */ "./src/app/transportation/transportation.component.ts");
/* harmony import */ var _transportation_transportationlist_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./transportation/transportationlist.component */ "./src/app/transportation/transportationlist.component.ts");
/* harmony import */ var _route_route_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./route/route.component */ "./src/app/route/route.component.ts");
/* harmony import */ var _route_routelist_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./route/routelist.component */ "./src/app/route/routelist.component.ts");
/* harmony import */ var _issue_issue_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./issue/issue.component */ "./src/app/issue/issue.component.ts");
/* harmony import */ var _issue_issuelist_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./issue/issuelist.component */ "./src/app/issue/issuelist.component.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
/* harmony import */ var _employee_employeelist_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./employee/employeelist.component */ "./src/app/employee/employeelist.component.ts");
/* harmony import */ var _job_job_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./job/job.component */ "./src/app/job/job.component.ts");
/* harmony import */ var _job_joblist_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./job/joblist.component */ "./src/app/job/joblist.component.ts");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./customer/customer.component */ "./src/app/customer/customer.component.ts");
/* harmony import */ var _customer_customerlist_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./customer/customerlist.component */ "./src/app/customer/customerlist.component.ts");
/* harmony import */ var _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./transactions/transactions.component */ "./src/app/transactions/transactions.component.ts");
/* harmony import */ var _transactions_transactionslist_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./transactions/transactionslist.component */ "./src/app/transactions/transactionslist.component.ts");
/* harmony import */ var _loans_loans_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./loans/loans.component */ "./src/app/loans/loans.component.ts");
/* harmony import */ var _loans_loanslist_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./loans/loanslist.component */ "./src/app/loans/loanslist.component.ts");
/* harmony import */ var _atms_atms_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./atms/atms.component */ "./src/app/atms/atms.component.ts");
/* harmony import */ var _atms_atmslist_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./atms/atmslist.component */ "./src/app/atms/atmslist.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _project_projectlist_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./project/projectlist.component */ "./src/app/project/projectlist.component.ts");






































































var routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"]
    },
    {
        path: 'loader',
        component: _loader_loader_component__WEBPACK_IMPORTED_MODULE_31__["LoaderComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    },
    {
        path: 'login/:userparams',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    },
    {
        path: 'spinner',
        component: _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_32__["SpinnerComponent"]
    },
    {
        path: 'forgotpassword',
        component: _login_forgotpassword_component__WEBPACK_IMPORTED_MODULE_8__["ForgotPasswordComponent"]
    },
    {
        path: 'signup',
        component: _login_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignUpComponent"]
    },
    {
        path: 'message',
        component: _message_message_component__WEBPACK_IMPORTED_MODULE_10__["MessageComponent"],
    },
    {
        path: 'message/:id',
        component: _message_message_component__WEBPACK_IMPORTED_MODULE_10__["MessageComponent"]
    },
    {
        path: 'messagelist',
        component: _message_message_list_component__WEBPACK_IMPORTED_MODULE_11__["MessageListComponent"]
    },
    {
        path: 'marksheet',
        component: _marksheet_marksheet_component__WEBPACK_IMPORTED_MODULE_3__["MarksheetComponent"]
    },
    {
        path: 'marksheet/:id',
        component: _marksheet_marksheet_component__WEBPACK_IMPORTED_MODULE_3__["MarksheetComponent"]
    },
    {
        path: 'marksheetlist',
        component: _marksheet_marksheet_list_component__WEBPACK_IMPORTED_MODULE_12__["MarksheetListComponent"]
    },
    {
        path: 'marksheetmeritlist',
        component: _marksheet_marksheetmerit_list_component__WEBPACK_IMPORTED_MODULE_28__["MarksheetmeritListComponent"]
    },
    {
        path: 'getmarksheet',
        component: _marksheet_getmarksheet_component__WEBPACK_IMPORTED_MODULE_29__["GetmarksheetComponent"]
    },
    {
        path: 'college',
        component: _college_college_component__WEBPACK_IMPORTED_MODULE_5__["CollegeComponent"]
    },
    {
        path: 'college/:id',
        component: _college_college_component__WEBPACK_IMPORTED_MODULE_5__["CollegeComponent"]
    },
    {
        path: 'collegelist',
        component: _college_college_list_component__WEBPACK_IMPORTED_MODULE_13__["CollegeListComponent"]
    },
    {
        path: 'student',
        component: _student_student_component__WEBPACK_IMPORTED_MODULE_4__["StudentComponent"]
    },
    {
        path: 'student/:id',
        component: _student_student_component__WEBPACK_IMPORTED_MODULE_4__["StudentComponent"]
    },
    {
        path: 'studentlist',
        component: _student_student_list_component__WEBPACK_IMPORTED_MODULE_14__["StudentListComponent"]
    },
    {
        path: 'user',
        component: _user_user_component__WEBPACK_IMPORTED_MODULE_16__["UserComponent"]
    },
    {
        path: 'user/:id',
        component: _user_user_component__WEBPACK_IMPORTED_MODULE_16__["UserComponent"]
    },
    {
        path: 'userlist',
        component: _user_user_list_component__WEBPACK_IMPORTED_MODULE_15__["UserListComponent"]
    },
    {
        path: 'role',
        component: _role_role_component__WEBPACK_IMPORTED_MODULE_17__["RoleComponent"]
    },
    {
        path: 'rolelist',
        component: _role_role_list_component__WEBPACK_IMPORTED_MODULE_20__["RoleListComponent"]
    },
    {
        path: 'role/:id',
        component: _role_role_component__WEBPACK_IMPORTED_MODULE_17__["RoleComponent"]
    },
    {
        path: 'course',
        component: _course_course_component__WEBPACK_IMPORTED_MODULE_18__["CourseComponent"]
    },
    {
        path: 'courselist',
        component: _course_course_list_component__WEBPACK_IMPORTED_MODULE_21__["CourseListComponent"]
    },
    {
        path: 'course/:id',
        component: _course_course_component__WEBPACK_IMPORTED_MODULE_18__["CourseComponent"]
    },
    {
        path: 'faculty',
        component: _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_22__["FacultyComponent"]
    },
    {
        path: 'facultylist',
        component: _faculty_faculty_list_component__WEBPACK_IMPORTED_MODULE_23__["FacultyListComponent"]
    },
    {
        path: 'faculty/:id',
        component: _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_22__["FacultyComponent"]
    },
    {
        path: 'timetable',
        component: _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_24__["TimetableComponent"]
    },
    {
        path: 'timetablelist',
        component: _timetable_timetable_list_component__WEBPACK_IMPORTED_MODULE_26__["TimetableListComponent"]
    },
    {
        path: 'timetable/:id',
        component: _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_24__["TimetableComponent"]
    },
    {
        path: 'subject',
        component: _subject_subject_component__WEBPACK_IMPORTED_MODULE_19__["SubjectComponent"]
    },
    {
        path: 'subjectlist',
        component: _subject_subject_list_component__WEBPACK_IMPORTED_MODULE_27__["SubjectListComponent"]
    },
    {
        path: 'subject/:id',
        component: _subject_subject_component__WEBPACK_IMPORTED_MODULE_19__["SubjectComponent"]
    },
    {
        path: 'myprofile',
        component: _user_myprofile_component__WEBPACK_IMPORTED_MODULE_33__["MyprofileComponent"]
    },
    {
        path: 'file',
        component: _file_file_component__WEBPACK_IMPORTED_MODULE_25__["FileComponent"]
    },
    {
        path: 'changepassword',
        component: _user_changepassword_component__WEBPACK_IMPORTED_MODULE_30__["ChangepasswordComponent"]
    },
    {
        path: 'order',
        component: _order_order_component__WEBPACK_IMPORTED_MODULE_34__["OrderComponent"]
    },
    {
        path: 'order/:id',
        component: _order_order_component__WEBPACK_IMPORTED_MODULE_34__["OrderComponent"]
    },
    {
        path: 'orderlist',
        component: _order_orderlist_component__WEBPACK_IMPORTED_MODULE_35__["OrderlistComponent"]
    },
    {
        path: 'productdetails',
        component: _productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_38__["ProductdetailsComponent"]
    },
    {
        path: 'productdetails/:id',
        component: _productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_38__["ProductdetailsComponent"]
    },
    {
        path: 'productdetailslist',
        component: _productdetails_productdetailslist_component__WEBPACK_IMPORTED_MODULE_39__["ProductdetailslistComponent"]
    },
    {
        path: 'patient',
        component: _patient_patient_component__WEBPACK_IMPORTED_MODULE_40__["PatientComponent"]
    },
    {
        path: 'patient/:id',
        component: _patient_patient_component__WEBPACK_IMPORTED_MODULE_40__["PatientComponent"]
    },
    {
        path: 'patientlist',
        component: _patient_patientlist_component__WEBPACK_IMPORTED_MODULE_41__["PatientlistComponent"]
    },
    {
        path: 'inventory',
        component: _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_44__["InventoryComponent"]
    },
    {
        path: 'inventory/:id',
        component: _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_44__["InventoryComponent"]
    },
    {
        path: 'inventorylist',
        component: _inventory_inventorylist_component__WEBPACK_IMPORTED_MODULE_45__["InventorylistComponent"]
    },
    {
        path: 'supplier',
        component: _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_46__["SupplierComponent"]
    },
    {
        path: 'supplier/:id',
        component: _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_46__["SupplierComponent"]
    },
    {
        path: 'supplierlist',
        component: _supplier_supplierlist_component__WEBPACK_IMPORTED_MODULE_47__["SupplierlistComponent"]
    },
    {
        path: 'vehicletracking',
        component: _vehicletracking_vehicletracking_component__WEBPACK_IMPORTED_MODULE_48__["VehicletrackingComponent"]
    },
    {
        path: 'vehicletracking/:id',
        component: _vehicletracking_vehicletracking_component__WEBPACK_IMPORTED_MODULE_48__["VehicletrackingComponent"]
    },
    {
        path: 'vehicletrackinglist',
        component: _vehicletracking_vehicletrackinglist_component__WEBPACK_IMPORTED_MODULE_49__["VehicletrackinglistComponent"]
    },
    {
        path: 'company',
        component: _company_company_component__WEBPACK_IMPORTED_MODULE_42__["CompanyComponent"]
    },
    {
        path: 'company/:id',
        component: _company_company_component__WEBPACK_IMPORTED_MODULE_42__["CompanyComponent"]
    },
    {
        path: 'companylist',
        component: _company_companylist_component__WEBPACK_IMPORTED_MODULE_43__["CompanylistComponent"]
    },
    {
        path: 'transportation',
        component: _transportation_transportation_component__WEBPACK_IMPORTED_MODULE_50__["TransportationComponent"]
    },
    {
        path: 'transportation/:id',
        component: _transportation_transportation_component__WEBPACK_IMPORTED_MODULE_50__["TransportationComponent"]
    },
    {
        path: 'transportationlist',
        component: _transportation_transportationlist_component__WEBPACK_IMPORTED_MODULE_51__["TransportationlistComponent"]
    },
    {
        path: 'employee',
        component: _employee_employee_component__WEBPACK_IMPORTED_MODULE_56__["EmployeeComponent"]
    },
    {
        path: 'employee/:id',
        component: _employee_employee_component__WEBPACK_IMPORTED_MODULE_56__["EmployeeComponent"]
    },
    {
        path: 'employeelist',
        component: _employee_employeelist_component__WEBPACK_IMPORTED_MODULE_57__["EmployeelistComponent"]
    },
    {
        path: 'job',
        component: _job_job_component__WEBPACK_IMPORTED_MODULE_58__["JobComponent"]
    },
    {
        path: 'job/:id',
        component: _job_job_component__WEBPACK_IMPORTED_MODULE_58__["JobComponent"]
    },
    {
        path: 'joblist',
        component: _job_joblist_component__WEBPACK_IMPORTED_MODULE_59__["JoblistComponent"]
    },
    {
        path: 'customer',
        component: _customer_customer_component__WEBPACK_IMPORTED_MODULE_60__["CustomerComponent"]
    },
    {
        path: 'customer/:id',
        component: _customer_customer_component__WEBPACK_IMPORTED_MODULE_60__["CustomerComponent"]
    },
    {
        path: 'customerlist',
        component: _customer_customerlist_component__WEBPACK_IMPORTED_MODULE_61__["CustomerlistComponent"]
    },
    {
        path: 'transactions',
        component: _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_62__["TransactionsComponent"]
    },
    {
        path: 'transactions/:id',
        component: _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_62__["TransactionsComponent"]
    },
    {
        path: 'transactionslist',
        component: _transactions_transactionslist_component__WEBPACK_IMPORTED_MODULE_63__["TransactionslistComponent"]
    },
    {
        path: 'issue',
        component: _issue_issue_component__WEBPACK_IMPORTED_MODULE_54__["IssueComponent"]
    },
    {
        path: 'issue/:id',
        component: _issue_issue_component__WEBPACK_IMPORTED_MODULE_54__["IssueComponent"]
    },
    {
        path: 'issuelist',
        component: _issue_issuelist_component__WEBPACK_IMPORTED_MODULE_55__["IssuelistComponent"]
    },
    {
        path: 'route',
        component: _route_route_component__WEBPACK_IMPORTED_MODULE_52__["RouteComponent"]
    },
    {
        path: 'route/:id',
        component: _route_route_component__WEBPACK_IMPORTED_MODULE_52__["RouteComponent"]
    },
    {
        path: 'routelist',
        component: _route_routelist_component__WEBPACK_IMPORTED_MODULE_53__["RoutelistComponent"]
    },
    {
        path: 'atms',
        component: _atms_atms_component__WEBPACK_IMPORTED_MODULE_66__["AtmsComponent"]
    },
    {
        path: 'atms/:id',
        component: _atms_atms_component__WEBPACK_IMPORTED_MODULE_66__["AtmsComponent"]
    },
    {
        path: 'atmslist',
        component: _atms_atmslist_component__WEBPACK_IMPORTED_MODULE_67__["AtmslistComponent"]
    },
    {
        path: 'project',
        component: _project_project_component__WEBPACK_IMPORTED_MODULE_68__["ProjectComponent"]
    },
    {
        path: 'project/:id',
        component: _project_project_component__WEBPACK_IMPORTED_MODULE_68__["ProjectComponent"]
    },
    {
        path: 'projectlist',
        component: _project_projectlist_component__WEBPACK_IMPORTED_MODULE_69__["ProjectlistComponent"]
    },
    {
        path: 'loans',
        component: _loans_loans_component__WEBPACK_IMPORTED_MODULE_64__["LoansComponent"]
    },
    {
        path: 'loans/:id',
        component: _loans_loans_component__WEBPACK_IMPORTED_MODULE_64__["LoansComponent"]
    },
    {
        path: 'loanslist',
        component: _loans_loanslist_component__WEBPACK_IMPORTED_MODULE_65__["LoanslistComponent"]
    },
    {
        path: 'product',
        component: _product_product_component__WEBPACK_IMPORTED_MODULE_36__["ProductComponent"]
    },
    {
        path: 'productlist',
        component: _product_productlist_component__WEBPACK_IMPORTED_MODULE_37__["ProductlistComponent"]
    },
    {
        path: 'product/:id',
        component: _product_product_component__WEBPACK_IMPORTED_MODULE_36__["ProductComponent"]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropbtn {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 16px;\r\n    font-size: 16px;\r\n    border: none;\r\n  }\r\n  \r\n  .dropdown {\r\n    position: relative;\r\n    display: inline-block;\r\n  }\r\n  \r\n  .dropdown-content {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #f1f1f1;\r\n    min-width: 160px;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 1;\r\n  }\r\n  \r\n  .dropdown-content a {\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n  }\r\n  \r\n  .app {\r\n    margin: 48px;\r\n  }\r\n  \r\n  .buttons {\r\n    display: flex;\r\n    max-width: 500px;\r\n    justify-content: space-evenly;\r\n    margin-bottom: 48px;\r\n\r\n  }\r\n\r\n  \r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtFQUNkOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQiw0Q0FBNEM7SUFDNUMsVUFBVTtFQUNaOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsY0FBYztFQUNoQjs7RUFDQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLG1CQUFtQjs7RUFFckIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICAgIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93bi1jb250ZW50IGEge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC5hcHAge1xyXG4gICAgbWFyZ2luOiA0OHB4O1xyXG4gIH1cclxuICBcclxuICAuYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDhweDtcclxuXHJcbiAgfVxyXG5cclxuICBcclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: myHttpLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myHttpLoader", function() { return myHttpLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _marksheet_marksheet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./marksheet/marksheet.component */ "./src/app/marksheet/marksheet.component.ts");
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./student/student.component */ "./src/app/student/student.component.ts");
/* harmony import */ var _college_college_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./college/college.component */ "./src/app/college/college.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _utility_data_validator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utility/data-validator */ "./src/app/utility/data-validator.ts");
/* harmony import */ var _login_forgotpassword_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/forgotpassword.component */ "./src/app/login/forgotpassword.component.ts");
/* harmony import */ var _login_signup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./login/signup.component */ "./src/app/login/signup.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _message_message_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./message/message-list.component */ "./src/app/message/message-list.component.ts");
/* harmony import */ var _marksheet_marksheet_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./marksheet/marksheet-list.component */ "./src/app/marksheet/marksheet-list.component.ts");
/* harmony import */ var _college_college_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./college/college-list.component */ "./src/app/college/college-list.component.ts");
/* harmony import */ var _student_student_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./student/student-list.component */ "./src/app/student/student-list.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_user_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./user/user-list.component */ "./src/app/user/user-list.component.ts");
/* harmony import */ var _role_role_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./role/role.component */ "./src/app/role/role.component.ts");
/* harmony import */ var _course_course_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./course/course.component */ "./src/app/course/course.component.ts");
/* harmony import */ var _subject_subject_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./subject/subject.component */ "./src/app/subject/subject.component.ts");
/* harmony import */ var _role_role_list_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./role/role-list.component */ "./src/app/role/role-list.component.ts");
/* harmony import */ var _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./timetable/timetable.component */ "./src/app/timetable/timetable.component.ts");
/* harmony import */ var _course_course_list_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./course/course-list.component */ "./src/app/course/course-list.component.ts");
/* harmony import */ var _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./faculty/faculty.component */ "./src/app/faculty/faculty.component.ts");
/* harmony import */ var _faculty_faculty_list_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./faculty/faculty-list.component */ "./src/app/faculty/faculty-list.component.ts");
/* harmony import */ var _file_file_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./file/file.component */ "./src/app/file/file.component.ts");
/* harmony import */ var _timetable_timetable_list_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./timetable/timetable-list.component */ "./src/app/timetable/timetable-list.component.ts");
/* harmony import */ var _subject_subject_list_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./subject/subject-list.component */ "./src/app/subject/subject-list.component.ts");
/* harmony import */ var _marksheet_marksheetmerit_list_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./marksheet/marksheetmerit-list.component */ "./src/app/marksheet/marksheetmerit-list.component.ts");
/* harmony import */ var _marksheet_getmarksheet_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./marksheet/getmarksheet.component */ "./src/app/marksheet/getmarksheet.component.ts");
/* harmony import */ var _user_changepassword_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./user/changepassword.component */ "./src/app/user/changepassword.component.ts");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/loader/loader.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./spinner/spinner.component */ "./src/app/spinner/spinner.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _user_myprofile_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./user/myprofile.component */ "./src/app/user/myprofile.component.ts");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./auth-service.service */ "./src/app/auth-service.service.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./order/order.component */ "./src/app/order/order.component.ts");
/* harmony import */ var _order_orderlist_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./order/orderlist.component */ "./src/app/order/orderlist.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _product_productlist_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./product/productlist.component */ "./src/app/product/productlist.component.ts");
/* harmony import */ var _productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./productdetails/productdetails.component */ "./src/app/productdetails/productdetails.component.ts");
/* harmony import */ var _productdetails_productdetailslist_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./productdetails/productdetailslist.component */ "./src/app/productdetails/productdetailslist.component.ts");
/* harmony import */ var _patient_patient_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./patient/patient.component */ "./src/app/patient/patient.component.ts");
/* harmony import */ var _patient_patientlist_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./patient/patientlist.component */ "./src/app/patient/patientlist.component.ts");
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./company/company.component */ "./src/app/company/company.component.ts");
/* harmony import */ var _company_companylist_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./company/companylist.component */ "./src/app/company/companylist.component.ts");
/* harmony import */ var _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./inventory/inventory.component */ "./src/app/inventory/inventory.component.ts");
/* harmony import */ var _inventory_inventorylist_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./inventory/inventorylist.component */ "./src/app/inventory/inventorylist.component.ts");
/* harmony import */ var _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./supplier/supplier.component */ "./src/app/supplier/supplier.component.ts");
/* harmony import */ var _supplier_supplierlist_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./supplier/supplierlist.component */ "./src/app/supplier/supplierlist.component.ts");
/* harmony import */ var _vehicletracking_vehicletracking_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./vehicletracking/vehicletracking.component */ "./src/app/vehicletracking/vehicletracking.component.ts");
/* harmony import */ var _vehicletracking_vehicletrackinglist_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./vehicletracking/vehicletrackinglist.component */ "./src/app/vehicletracking/vehicletrackinglist.component.ts");
/* harmony import */ var _transportation_transportation_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./transportation/transportation.component */ "./src/app/transportation/transportation.component.ts");
/* harmony import */ var _transportation_transportationlist_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./transportation/transportationlist.component */ "./src/app/transportation/transportationlist.component.ts");
/* harmony import */ var _route_route_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./route/route.component */ "./src/app/route/route.component.ts");
/* harmony import */ var _route_routelist_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./route/routelist.component */ "./src/app/route/routelist.component.ts");
/* harmony import */ var _issue_issue_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./issue/issue.component */ "./src/app/issue/issue.component.ts");
/* harmony import */ var _issue_issuelist_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./issue/issuelist.component */ "./src/app/issue/issuelist.component.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
/* harmony import */ var _employee_employeelist_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./employee/employeelist.component */ "./src/app/employee/employeelist.component.ts");
/* harmony import */ var _job_job_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./job/job.component */ "./src/app/job/job.component.ts");
/* harmony import */ var _job_joblist_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./job/joblist.component */ "./src/app/job/joblist.component.ts");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./customer/customer.component */ "./src/app/customer/customer.component.ts");
/* harmony import */ var _customer_customerlist_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./customer/customerlist.component */ "./src/app/customer/customerlist.component.ts");
/* harmony import */ var _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./transactions/transactions.component */ "./src/app/transactions/transactions.component.ts");
/* harmony import */ var _transactions_transactionslist_component__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./transactions/transactionslist.component */ "./src/app/transactions/transactionslist.component.ts");
/* harmony import */ var _loans_loans_component__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./loans/loans.component */ "./src/app/loans/loans.component.ts");
/* harmony import */ var _loans_loanslist_component__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./loans/loanslist.component */ "./src/app/loans/loanslist.component.ts");
/* harmony import */ var _atms_atms_component__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./atms/atms.component */ "./src/app/atms/atms.component.ts");
/* harmony import */ var _atms_atmslist_component__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./atms/atmslist.component */ "./src/app/atms/atmslist.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _project_projectlist_component__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./project/projectlist.component */ "./src/app/project/projectlist.component.ts");



















































































// import { AuthService } from './auth.service';
function myHttpLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _marksheet_marksheet_component__WEBPACK_IMPORTED_MODULE_7__["MarksheetComponent"],
                _marksheet_marksheet_list_component__WEBPACK_IMPORTED_MODULE_21__["MarksheetListComponent"],
                _student_student_component__WEBPACK_IMPORTED_MODULE_8__["StudentComponent"],
                _student_student_list_component__WEBPACK_IMPORTED_MODULE_23__["StudentListComponent"],
                _college_college_component__WEBPACK_IMPORTED_MODULE_9__["CollegeComponent"],
                _college_college_list_component__WEBPACK_IMPORTED_MODULE_22__["CollegeListComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"],
                _login_forgotpassword_component__WEBPACK_IMPORTED_MODULE_16__["ForgotPasswordComponent"],
                _login_signup_component__WEBPACK_IMPORTED_MODULE_17__["SignUpComponent"],
                _message_message_component__WEBPACK_IMPORTED_MODULE_18__["MessageComponent"],
                _message_message_list_component__WEBPACK_IMPORTED_MODULE_20__["MessageListComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_24__["UserComponent"],
                _user_user_list_component__WEBPACK_IMPORTED_MODULE_25__["UserListComponent"],
                _role_role_component__WEBPACK_IMPORTED_MODULE_26__["RoleComponent"],
                _role_role_list_component__WEBPACK_IMPORTED_MODULE_29__["RoleListComponent"],
                _course_course_component__WEBPACK_IMPORTED_MODULE_27__["CourseComponent"],
                _subject_subject_component__WEBPACK_IMPORTED_MODULE_28__["SubjectComponent"],
                _subject_subject_list_component__WEBPACK_IMPORTED_MODULE_36__["SubjectListComponent"],
                _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_30__["TimetableComponent"],
                _course_course_list_component__WEBPACK_IMPORTED_MODULE_31__["CourseListComponent"],
                _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_32__["FacultyComponent"],
                _faculty_faculty_list_component__WEBPACK_IMPORTED_MODULE_33__["FacultyListComponent"],
                _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_30__["TimetableComponent"],
                _timetable_timetable_list_component__WEBPACK_IMPORTED_MODULE_35__["TimetableListComponent"],
                _marksheet_marksheetmerit_list_component__WEBPACK_IMPORTED_MODULE_37__["MarksheetmeritListComponent"],
                _marksheet_getmarksheet_component__WEBPACK_IMPORTED_MODULE_38__["GetmarksheetComponent"],
                _user_changepassword_component__WEBPACK_IMPORTED_MODULE_39__["ChangepasswordComponent"],
                _loader_loader_component__WEBPACK_IMPORTED_MODULE_40__["LoaderComponent"],
                _file_file_component__WEBPACK_IMPORTED_MODULE_34__["FileComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_41__["NavbarComponent"],
                _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_42__["SpinnerComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_43__["FooterComponent"],
                _user_myprofile_component__WEBPACK_IMPORTED_MODULE_44__["MyprofileComponent"],
                _order_order_component__WEBPACK_IMPORTED_MODULE_46__["OrderComponent"],
                _order_orderlist_component__WEBPACK_IMPORTED_MODULE_47__["OrderlistComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_48__["ProductComponent"],
                _product_productlist_component__WEBPACK_IMPORTED_MODULE_49__["ProductlistComponent"],
                _productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_50__["ProductdetailsComponent"],
                _productdetails_productdetailslist_component__WEBPACK_IMPORTED_MODULE_51__["ProductdetailslistComponent"],
                _patient_patient_component__WEBPACK_IMPORTED_MODULE_52__["PatientComponent"],
                _patient_patientlist_component__WEBPACK_IMPORTED_MODULE_53__["PatientlistComponent"],
                _company_company_component__WEBPACK_IMPORTED_MODULE_54__["CompanyComponent"],
                _company_companylist_component__WEBPACK_IMPORTED_MODULE_55__["CompanylistComponent"],
                _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_56__["InventoryComponent"],
                _inventory_inventorylist_component__WEBPACK_IMPORTED_MODULE_57__["InventorylistComponent"],
                _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_58__["SupplierComponent"],
                _supplier_supplierlist_component__WEBPACK_IMPORTED_MODULE_59__["SupplierlistComponent"],
                _vehicletracking_vehicletracking_component__WEBPACK_IMPORTED_MODULE_60__["VehicletrackingComponent"],
                _vehicletracking_vehicletrackinglist_component__WEBPACK_IMPORTED_MODULE_61__["VehicletrackinglistComponent"],
                _transportation_transportation_component__WEBPACK_IMPORTED_MODULE_62__["TransportationComponent"],
                _transportation_transportationlist_component__WEBPACK_IMPORTED_MODULE_63__["TransportationlistComponent"],
                _route_route_component__WEBPACK_IMPORTED_MODULE_64__["RouteComponent"],
                _route_routelist_component__WEBPACK_IMPORTED_MODULE_65__["RoutelistComponent"],
                _issue_issue_component__WEBPACK_IMPORTED_MODULE_66__["IssueComponent"],
                _issue_issuelist_component__WEBPACK_IMPORTED_MODULE_67__["IssuelistComponent"],
                _employee_employee_component__WEBPACK_IMPORTED_MODULE_68__["EmployeeComponent"],
                _employee_employeelist_component__WEBPACK_IMPORTED_MODULE_69__["EmployeelistComponent"],
                _job_job_component__WEBPACK_IMPORTED_MODULE_70__["JobComponent"],
                _job_joblist_component__WEBPACK_IMPORTED_MODULE_71__["JoblistComponent"],
                _customer_customer_component__WEBPACK_IMPORTED_MODULE_72__["CustomerComponent"],
                _customer_customerlist_component__WEBPACK_IMPORTED_MODULE_73__["CustomerlistComponent"],
                _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_74__["TransactionsComponent"],
                _transactions_transactionslist_component__WEBPACK_IMPORTED_MODULE_75__["TransactionslistComponent"],
                _loans_loans_component__WEBPACK_IMPORTED_MODULE_76__["LoansComponent"],
                _loans_loanslist_component__WEBPACK_IMPORTED_MODULE_77__["LoanslistComponent"],
                _atms_atms_component__WEBPACK_IMPORTED_MODULE_78__["AtmsComponent"],
                _atms_atmslist_component__WEBPACK_IMPORTED_MODULE_79__["AtmslistComponent"],
                _project_project_component__WEBPACK_IMPORTED_MODULE_80__["ProjectComponent"],
                _project_projectlist_component__WEBPACK_IMPORTED_MODULE_81__["ProjectlistComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateLoader"],
                        useFactory: myHttpLoader,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]]
                    }
                }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"], useClass: _auth_service_service__WEBPACK_IMPORTED_MODULE_45__["AuthService"], multi: true
                },
                _http_service_service__WEBPACK_IMPORTED_MODULE_12__["HttpServiceService"],
                _utility_data_validator__WEBPACK_IMPORTED_MODULE_15__["DataValidator"],
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_19__["CookieService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/atms/atms.component.css":
/*!*****************************************!*\
  !*** ./src/app/atms/atms.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F0bXMvYXRtcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/atms/atms.component.html":
/*!******************************************!*\
  !*** ./src/app/atms/atms.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n\r\n  .input-group-addon {\r\n    box-shadow: 9px 8px 7px #001a33;\r\n  }\r\n\r\n  .required-field {\r\n    color: red;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .alertRedColor {\r\n    color: red;\r\n  }\r\n\r\n  .card-body {\r\n    padding: 2rem;\r\n  }\r\n\r\n  .input-group-text i {\r\n    width: 1.5rem;\r\n  }\r\n\r\n  .btn-primary,\r\n  .btn-success,\r\n  .btn-warning {\r\n    width: 100%;\r\n  }\r\n\r\n  .form-control {\r\n    height: calc(2.25rem + 2px);\r\n  }\r\n\r\n  .form-group {\r\n    margin-bottom: 1.5rem;\r\n  }\r\n\r\n  .input-group-prepend .input-group-text {\r\n    background-color: #e9ecef;\r\n    border: 1px solid #ced4da;\r\n  }\r\n\r\n  .input-group-prepend .input-group-text i {\r\n    color: #495057;\r\n  }\r\n\r\n  .row {\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n  }\r\n\r\n  .textarea-height {\r\n    height: 100px;\r\n  }\r\n\r\n  .card {\r\n    margin: auto;\r\n    max-width: 500px;\r\n  }\r\n</style>\r\n\r\n<div class=\"container-fluid\"\r\n  style=\"padding: 2% 0; background: url('assets/files/wall.jpg') no-repeat center center; background-attachment: fixed; background-size: cover; width: 100%; height: auto;\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body input-group-addon grad\">\r\n          <form name=\"userForm\">\r\n            <h2 *ngIf=\"!form.data.id\" class=\"text-primary font-weight-bold text-center\">{{ 'Add ATMs' |\r\n              translate }}\r\n            </h2>\r\n            <h2 *ngIf=\"form.data.id\" class=\"text-primary font-weight-bold text-center\">{{ 'Update ATMs' |\r\n              translate }}\r\n            </h2>\r\n\r\n            <div *ngIf=\"!form.error && form.message\" class=\"alert alert-success alert-dismissible\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n              {{ form.message }}\r\n            </div>\r\n\r\n            <div *ngIf=\"form.error && form.message\" class=\"alert alert-danger alert-dismissible\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n              {{ form.message }}\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Location' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-flag grey-text\"></i></div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"locationId\" [(ngModel)]=\"form.data.locationId\"\r\n                  aria-label=\"ngSelected\">\r\n                  <option [ngValue]=\"undefined\">{{ 'Select location' | translate }}</option>\r\n                  <option *ngFor=\"let obj of form.preload.locationList\" [value]=\"obj.key\">{{ obj.value }}</option>\r\n                </select>\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.locationId\" class=\"alertRedColor\">{{form.inputerror.locationId}}</span>\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Cash Available' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-money-bill-wave grey-text\"></i></div>\r\n                </div>\r\n                <input type=\"text\" name=\"cashAvailable\" [(ngModel)]=\"form.data.cashAvailable\" class=\"form-control\"\r\n                  placeholder=\"{{ 'Enter cashAvailable' | translate }}\" (input)=\"validateCashAvailableInput($event)\">\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.cashAvailable\" class=\"alertRedColor\">{{ form.inputerror.cashAvailable }}</span>\r\n            </div>\r\n            \r\n            \r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Last Restocked Date' | translate }}</b><span class=\"required-field\"></span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-calendar-alt grey-text\"></i></div>\r\n                </div>\r\n                <input type=\"date\" name=\"lastRestockedDate\" [value]=\"form.data.lastRestockedDate | date:'yyyy-MM-dd'\"\r\n                  (input)=\"form.data.lastRestockedDate=parseDate($event.target.value)\" class=\"form-control\" required />\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.lastRestockedDate\" class=\"alertRedColor\">{{ form.inputerror.lastRestockedDate\r\n                }}</span>\r\n            </div>\r\n\r\n\r\n            <div class=\"row pt-2 pb-3 justify-content-center\">\r\n              <div class=\"col-md-4\">\r\n                <button *ngIf=\"!form.data.id\" (click)=\"onUpload()\" class=\"btn btn-success\">{{ 'Save' | translate\r\n                  }}</button>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <button *ngIf=\"form.data.id\" (click)=\"onUpload()\" class=\"btn btn-success\">{{ 'Update' | translate\r\n                  }}</button>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <a class=\"btn btn-warning\" type=\"button\" [routerLink]=\"['/atmslist']\">{{ 'List' | translate\r\n                  }}</a>\r\n              </div>\r\n            </div>\r\n\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <app-footer></app-footer>"

/***/ }),

/***/ "./src/app/atms/atms.component.ts":
/*!****************************************!*\
  !*** ./src/app/atms/atms.component.ts ***!
  \****************************************/
/*! exports provided: AtmsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtmsComponent", function() { return AtmsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







var AtmsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AtmsComponent, _super);
    function AtmsComponent(locator, formBuilder, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.ATMS, locator, route) || this;
        _this.locator = locator;
        _this.formBuilder = formBuilder;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.getKey = false;
        _this.selected = null;
        _this.userForm = null;
        return _this;
    }
    AtmsComponent.prototype.submit = function () {
        var _self = this;
        console.log('in submit');
        console.log(this.form);
        console.log(this.form.data);
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {}; // Clear input errors here
            if (res.success) {
                _self.form.error = false; // Set error to false on success
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("----------Rahul----------.");
                // Clear form data if needed
                // _self.form.data = {};
            }
            else {
                _self.form.error = true;
                if (res.result.inputerror) {
                    _self.form.inputerror = res.result.inputerror;
                }
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    AtmsComponent.prototype.submit1 = function () {
        var _self = this;
        console.log(this.form + "submit running start");
        console.log(this.form.data + "form data going to be submit");
        this.serviceLocator.httpService.post(this.api.search, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            _self.form.data.id = res.result.data;
            if (res.success) {
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("--------------------.");
            }
            else {
                _self.form.error = true;
                _self.form.inputerror = res.result.inputerror;
                _self.form.message = res.result.message;
            }
            _self.form.data.id = res.result.data;
            console.log('FORM', _self.form);
        });
    };
    AtmsComponent.prototype.onUpload = function (userform) {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    AtmsComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.locationId);
        console.log(form.locationId);
        flag = flag && validator.isNotNullObject(form.cashAvailable);
        console.log(form.cashAvailable);
        flag = flag && validator.isNotNullObject(form.lastRestockedDate);
        console.log(form.lastRestockedDate);
        return flag;
    };
    AtmsComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        console.log(form.id + 'populate form in shoppingcomponent');
        form.cashAvailable = data.cashAvailable;
        form.lastRestockedDate = data.lastRestockedDate;
        form.locationId = data.locationId;
    };
    AtmsComponent.prototype.validateCashAvailable = function (event) {
        var input = event.key;
        // Allow numbers, decimal point, and backspace
        if (!(event.ctrlKey || event.altKey || event.metaKey) && ((input >= '0' && input <= '9') || input === '.' || input === 'Backspace' || input === 'Delete')) {
            // Allow input to proceed
        }
        else {
            // Prevent default action (usually a character is typed)
            event.preventDefault();
        }
    };
    // Method to handle input validation for Cash Available field
    AtmsComponent.prototype.validateCashAvailableInput = function (event) {
        var inputElement = event.target;
        var value = inputElement.value;
        // Remove non-numeric characters except decimal point
        value = value.replace(/[^0-9.]/g, '');
        // Remove extra decimal points
        var parts = value.split('.');
        if (parts.length > 2) {
            value = parts[0] + '.' + parts.slice(1).join('');
        }
        // Limit the value to 1,000,000,000
        var parsedValue = parseFloat(value);
        if (!isNaN(parsedValue) && parsedValue > 1000000000) {
            value = '1000000000';
        }
        // Update the input value
        inputElement.value = value;
        // Update the ngModel data
        this.form.data.cashAvailable = value;
    };
    AtmsComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    AtmsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-atms',
            template: __webpack_require__(/*! ./atms.component.html */ "./src/app/atms/atms.component.html"),
            styles: [__webpack_require__(/*! ./atms.component.css */ "./src/app/atms/atms.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
    ], AtmsComponent);
    return AtmsComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseCtl"]));



/***/ }),

/***/ "./src/app/atms/atmslist.component.css":
/*!*********************************************!*\
  !*** ./src/app/atms/atmslist.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F0bXMvYXRtc2xpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/atms/atmslist.component.html":
/*!**********************************************!*\
  !*** ./src/app/atms/atmslist.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  #nnn {\r\n    background: none;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .panel-heading {\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .content-wrapper {\r\n    background: url(assets/files/wall.jpg) no-repeat center center;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    width: 100%;\r\n    min-height: 100vh;\r\n    padding: 20px;\r\n  }\r\n\r\n  .table-responsive {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .full-height {\r\n    height: 100vh;\r\n  }\r\n</style>\r\n\r\n<div class=\"content-wrapper full-height\">\r\n  <div class=\"container-fluid full-height\">\r\n    <div class=\"panel panel-primary full-height\">\r\n      <div class=\"panel-heading\">\r\n        <h1 class=\"text-primary font-weight-bold\">{{ 'ATMs List' | translate }}</h1>\r\n      </div>\r\n\r\n      <div class=\"row mt-3\">\r\n        <div class=\"col-md-3\">\r\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.searchParams.lastRestockedDate\"\r\n            (ngModelChange)=\"formatDate($event)\" placeholder=\"{{ 'Search last Restocked Date' | translate }}\">\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.cashAvailable\"\r\n            (input)=\"validateCashInput($event)\" placeholder=\"{{ 'Search cash Available' | translate }}\">\r\n          <div *ngIf=\"form.inputerror.cashAvailable\" class=\"text-danger\">\r\n            {{ form.inputerror.cashAvailable }}\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <select class=\"form-control\" name=\"locationId\" [(ngModel)]=\"form.searchParams.locationId\">\r\n            <option [ngValue]=\"undefined\">{{ 'Select locationId' | translate }}</option>\r\n            <option *ngFor=\"let obj of form.preload.locationList\" [value]=\"obj.key\">{{ obj.value }}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row mt-3 justify-content-center\">\r\n        <div class=\"col-md-2\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary btn-block\">{{ 'Search' | translate }}</button>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <button (click)=\"forward('/atms')\" type=\"button\" class=\"btn btn-success btn-block\">{{ 'Add ATMs' | translate\r\n            }}</button>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger btn-block\">{{ 'Delete' | translate }}</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"form.error || form.message\" class=\"row mt-3 justify-content-center\">\r\n        <div class=\"col-md-6\">\r\n          <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{ form.message }}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{ form.message }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-responsive mt-3\">\r\n        <table class=\"table table-bordered table-hover font-weight-bold text-dark\">\r\n          <thead class=\"thead-dark text-uppercase\">\r\n            <tr align=\"center\">\r\n              <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\"\r\n                  (change)=\"checkUncheckAll($event)\" /></th>\r\n              <th>{{ 'S.No' }}</th>\r\n              <th>{{ 'Cash Available' }}</th>\r\n              <th>{{ 'Last Restocked Date' }}</th>\r\n              <th>{{ 'locationId' }}</th>\r\n              <th>{{ 'Edit' }}</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n              <td><input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" [id]=\"m.id\" /></td>\r\n              <td>{{ (form.pageNo * 5) + i + 1 }}</td>\r\n              <td>{{ m.cashAvailable }}</td>\r\n              <td>{{ convertToLocalDate(m.lastRestockedDate) }}</td>\r\n              <td>{{ m.locationName }}</td>\r\n              <td>\r\n                <button class=\"fa fa-edit text-primary\" id=\"nnn\" (click)=\"forward('/atms/' + m.id)\"></button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <div class=\"d-flex justify-content-between mt-3\">\r\n        <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{ 'Previous' | translate\r\n          }}</button>\r\n        <div *ngIf=\"form.list.length == 0\">\r\n          <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/atmslist']\" (click)=\"exit()\">{{ 'Back' | translate }}</a>\r\n        </div>\r\n        <button (click)=\"next()\" [disabled]=\"nextList == 0\" class=\"btn btn-info\">{{ 'Next' | translate }}</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/atms/atmslist.component.ts":
/*!********************************************!*\
  !*** ./src/app/atms/atmslist.component.ts ***!
  \********************************************/
/*! exports provided: AtmslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtmslistComponent", function() { return AtmslistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var AtmslistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AtmslistComponent, _super);
    function AtmslistComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.ATMS, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null },
            inputerror: {
                cashAvailable: null
            },
            searchParams: {
                cashAvailable: '',
                lastRestockedDate: '',
                locationId: ''
            },
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        return _this;
    }
    AtmslistComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    AtmslistComponent.prototype.formatDate = function (event) {
        var selectedDate = new Date(event);
        var formattedDate = selectedDate.toISOString().split('T')[0];
        this.form.searchParams.lastRestockedDate = formattedDate;
    };
    AtmslistComponent.prototype.convertToLocalDate = function (dateString) {
        var date = new Date(dateString);
        var options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return date.toLocaleDateString(undefined, options);
    };
    AtmslistComponent.prototype.validateCashInput = function (event) {
        var value = event.target.value.trim();
        var isValidNumber = /^[0-9]+(\.[0-9]+)?$/.test(value);
        var floatValue = parseFloat(value);
        if (value === '') {
            this.form.inputerror.cashAvailable = null; // Clear the error message
        }
        else if (!isValidNumber || floatValue > 1000000000 || !value.includes('.')) {
            this.form.inputerror.cashAvailable = 'Please type an exact cash available value (e.g., 90.9, 1000000.5)';
        }
        else {
            this.form.inputerror.cashAvailable = null;
            this.form.searchParams.cashAvailable = floatValue.toString();
        }
    };
    AtmslistComponent.prototype.submit = function () {
        this.form.pageNo = 0;
        this.search();
    };
    AtmslistComponent.prototype.search = function () {
        this.form.searchMessage = null;
        _super.prototype.search.call(this);
    };
    AtmslistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-atmslist',
            template: __webpack_require__(/*! ./atmslist.component.html */ "./src/app/atms/atmslist.component.html"),
            styles: [__webpack_require__(/*! ./atmslist.component.css */ "./src/app/atms/atmslist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], AtmslistComponent);
    return AtmslistComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/auth-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/auth-service.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-service.service */ "./src/app/http-service.service.ts");



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.intercept = function (req, next) {
        if (localStorage.getItem('fname')) {
            req = req.clone({
                setHeaders: {
                    "withCredentials": "true",
                    "name": "Dipanshu",
                }
            });
        }
        console.log(req.headers.get("Authorization") + "------------------->>>");
        return next.handle(req);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpServiceService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/base-list.component.ts":
/*!****************************************!*\
  !*** ./src/app/base-list.component.ts ***!
  \****************************************/
/*! exports provided: BaseListCtl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseListCtl", function() { return BaseListCtl; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.component */ "./src/app/base.component.ts");



var BaseListCtl = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BaseListCtl, _super);
    function BaseListCtl(endpoint, locator, route) {
        var _this = _super.call(this, endpoint, locator, route) || this;
        _this.endpoint = endpoint;
        _this.locator = locator;
        _this.route = route;
        _this.deleteRecordList = [];
        _this.isMasterSel = false;
        _this.checkList = 0;
        return _this;
    }
    /**
     * Initialize component
     */
    BaseListCtl.prototype.ngOnInit = function () {
        this.preload();
        this.search();
        this.isMasterSel = false;
    };
    BaseListCtl.prototype.display = function () {
        this.search();
    };
    BaseListCtl.prototype.submit = function () {
        this.form.pageNo = 0;
        if (this.form.searchParams.roleId == "undefined" || this.form.searchParams.id == "undefined") {
            this.form.searchParams = {};
            this.search();
        }
        else {
            this.search();
        }
    };
    BaseListCtl.prototype.delete = function (id) {
        _super.prototype.delete.call(this, id, function () {
            this.search();
        });
    };
    BaseListCtl.prototype.next = function () {
        this.form.pageNo++;
        this.display();
        this.isMasterSel = false;
        //  this.searchOperation('previous');
    };
    BaseListCtl.prototype.exit = function () {
        location.reload();
    };
    BaseListCtl.prototype.previous = function () {
        if (this.form.pageNo > 0) {
            this.form.pageNo--;
            //  this.display(); 
            this.isMasterSel = false;
            this.searchOperation('previous');
        }
    };
    BaseListCtl.prototype.checkUncheckAll = function (event) {
        var checked = event.target.checked;
        this.checkboxes.forEach(function (element) {
            element.nativeElement.checked = checked;
        });
    };
    BaseListCtl.prototype.checklistUpdate = function () {
        var _this = this;
        this.isMasterSel = false;
        this.checkList = 0;
        this.checkboxes.forEach(function (element) {
            if (element.nativeElement.checked == true) {
                _this.checkList = _this.checkList + 1;
            }
        });
        if (this.checkList == this.form.list.length) {
            this.isMasterSel = true;
        }
    };
    //   deleteMany(){
    //   console.log('delete Many Records starts ');
    //   console.log('this.form.pageNo ' +this.form.pageNo);  
    //   var msg : String =''
    //   this.deleteRecordList.length=0;
    //   console.log('record deleting start ')
    //   var isRecordSelected:boolean = false ;
    //     this.checkboxes.forEach((element) => {
    //       if (element.nativeElement.checked) {
    //         // console.log('record deleting ' + element.nativeElement.id)
    //         this.deleteRecordList.push(element.nativeElement.id);
    //         isRecordSelected = true ;
    //       }
    //     });     
    //     if(isRecordSelected){
    //       console.log('record(s) for delete ' + this.deleteRecordList)        
    //       this.serviceLocator.httpService.get(this.api.deleteMany + "/" + this.deleteRecordList + '?pageNo=' +this.form.pageNo, function (res) {
    //         if (res.success) {
    //             console.log('Inside response success ')
    //           //  this.deleteMany();
    //          //  this.form.message = "Data is deleted";
    //        //  msg ="Data is deleted";
    //         //  this.form.message = res.result.message;
    //           console.log('deleteMany Calling Callback'); 
    //           this.search();  
    //     } else {
    //       this.form.error = true;
    //       this.form.message = res.result.message;
    //     }
    //   });
    //   this.form.message = "Data is deleted" ;
    //   console.log('this.form.pageNo ' +this.form.pageNo);  
    //     }else{
    //       this.form.message = "Select Atleast One Record";
    //         this.form.error = true;
    //     console.log('No record(s) for delete ')
    //   }
    //   console.log('delete Many Records ends ');
    // }
    BaseListCtl.prototype.deleteMany = function () {
        var _this = this;
        console.log('delete Many Records starts ');
        console.log('this.form.pageNo ' + this.form.pageNo);
        this.form.error = false;
        this.deleteRecordList.length = 0;
        console.log('record deleting start ');
        var isRecordSelected = false;
        this.checkboxes.forEach(function (element) {
            if (element.nativeElement.checked) {
                // console.log('record deleting ' + element.nativeElement.id)
                _this.deleteRecordList.push(element.nativeElement.id);
                isRecordSelected = true;
            }
        });
        if (isRecordSelected) {
            console.log('record(s) for delete ' + this.deleteRecordList);
            _super.prototype.deleteMany.call(this, this.deleteRecordList + '?pageNo=' + this.form.pageNo, function () {
                //  this.search();  
            });
        }
        else {
            this.form.message = "Select Atleast One Record";
            this.form.error = true;
            console.log('No record(s) for delete ');
        }
        this.isMasterSel = false;
        console.log('delete Many Records ends ');
    };
    BaseListCtl.prototype.generateReport = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])("checkboxes"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], BaseListCtl.prototype, "checkboxes", void 0);
    return BaseListCtl;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/base.component.ts":
/*!***********************************!*\
  !*** ./src/app/base.component.ts ***!
  \***********************************/
/*! exports provided: BaseCtl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseCtl", function() { return BaseCtl; });
var BaseCtl = /** @class */ (function () {
    /**
     * Initialize services
     *
     * @param serviceLocator
     * @param route
     */
    function BaseCtl(endpoint, serviceLocator, route) {
        this.endpoint = endpoint;
        this.serviceLocator = serviceLocator;
        this.route = route;
        this.api = {
            endpoint: null,
            get: null,
            save: null,
            search: null,
            delete: null,
            deleteMany: null,
            preload: null,
            report: null,
            address: null
        };
        /**
         * Form contains preload data, error/sucess message
         */
        this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        this.nextList = 0;
        var _self = this;
        _self.initApi(endpoint);
        /**
         * Get primary key from path variale
         */
        serviceLocator.getPathVariable(route, function (params) {
            _self.form.data.id = params["id"];
            console.log('I GOT ID', _self.form.data.id);
        });
    }
    BaseCtl.prototype.initApi = function (ep) {
        this.api.endpoint = ep;
        this.api.get = ep + "/get";
        this.api.save = ep + "/save";
        this.api.search = ep + "/search";
        this.api.delete = ep + "/delete";
        this.api.deleteMany = ep + "/deleteMany";
        this.api.preload = ep + "/preload";
        this.api.report = ep + "/report";
        this.api.address = ep + "/address";
        console.log("API", this.api);
    };
    /**
     * Initialize component
     */
    BaseCtl.prototype.ngOnInit = function () {
        this.preload();
        if (this.form.data.id && this.form.data.id > 0) {
            this.display();
        }
    };
    /**
     * Loded preload data
     */
    BaseCtl.prototype.preload = function () {
        console.log("preload start");
        var _self = this;
        this.serviceLocator.httpService.get(_self.api.preload, function (res) {
            console.log("base list preload", _self.api.preload);
            if (res.success) {
                _self.form.preload = res.result;
            }
            else {
                _self.form.error = true;
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    BaseCtl.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    /**
     * Override by childs
     *
     * @param form
     */
    BaseCtl.prototype.validateForm = function (form) {
    };
    /**
     * Searhs records
     */
    BaseCtl.prototype.search = function () {
        console.log("search start");
        var _self = this;
        console.log("Search Form", _self.form.searchParams);
        this.serviceLocator.httpService.post(_self.api.search + "/" + _self.form.pageNo, _self.form.searchParams, function (res) {
            if (res.success) {
                _self.form.list = res.result.data;
                _self.nextList = res.result.nextList;
                if (_self.form.list.length == 0) {
                    _self.form.message = "No record found";
                    _self.form.error = true;
                }
                console.log("List Size", _self.form.list.length);
            }
            else {
                _self.form.error = false;
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    BaseCtl.prototype.searchOperation = function (operation) {
        console.log("previous/next search start");
        var _self = this;
        console.log("Search Form", _self.form.searchParams);
        this.serviceLocator.httpService.post(_self.api.search + "/" + _self.form.pageNo, _self.form.searchParams, function (res) {
            if (operation == 'next' || operation == 'previous') {
                _self.nextList = res.result.nextList;
                _self.form.message = null;
                _self.form.error = false;
            }
            if (res.success) {
                _self.form.list = res.result.data;
                if (_self.form.list.length == 0) {
                    _self.form.message = "No record found";
                    _self.form.error = true;
                }
                console.log("List Size", _self.form.list.length);
            }
            else {
                _self.form.error = false;
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    /**
     * Contains display logic. It fetches data from database for the primary key
     */
    BaseCtl.prototype.display = function () {
        var _self = this;
        console.log('Inside display method');
        this.serviceLocator.httpService.get(_self.api.get + "/" + _self.form.data.id, function (res) {
            _self.form.data.id = 0;
            if (res.success) {
                _self.populateForm(_self.form.data, res.result.data);
            }
            else {
                _self.form.error = true;
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    /**
     * Populate HTML form data
     * Overridden by child classes.
     *
     * @param form
     * @param data
     */
    BaseCtl.prototype.populateForm = function (form, data) {
        form.id = data.id;
        console.log(form.id + 'formid in base ctl populate form');
    };
    /**
     * Contains submit logic. It saves data
     */
    BaseCtl.prototype.submit = function () {
        var _self = this;
        console.log(this.form + "submit running start");
        console.log("form data going to be submit" + this.form.data);
        //  console.log("form data going to be submit" + this.studentId);
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            if (res.success) {
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                //  console.log("--------------------.");
                //return _self.form.data.id ;
            }
            else {
                _self.form.error = true;
                if (res.result.inputerror) {
                    _self.form.inputerror = res.result.inputerror;
                }
                _self.form.message = res.result.message;
            }
            _self.form.data.id = res.result.data.id;
            console.log('FORM', _self.form);
        });
    };
    BaseCtl.prototype.delete = function (id, callback) {
        var _self = this;
        this.serviceLocator.httpService.get(_self.api.delete + "/" + id, function (res) {
            if (res.success) {
                _self.form.message = "Data is deleted";
                if (callback) {
                    console.log('Response Success and now Calling Callback');
                    //  callback();  
                    this.search();
                }
            }
            else {
                _self.form.error = true;
                _self.form.message = res.result.message;
            }
        });
    };
    BaseCtl.prototype.deleteMany = function (id, callback) {
        var _self = this;
        this.serviceLocator.httpService.post(_self.api.deleteMany + "/" + id, this.form.data, function (res) {
            if (res.success) {
                _self.form.message = "Data is deleted";
                if (callback) {
                    console.log('Response Success and now Calling Callback');
                    _self.form.list = res.result.data;
                    console.log("List ::  ", +res.data);
                    console.log("List Size", _self.form.list.length);
                    //  callback();       
                }
            }
            else {
                _self.form.error = true;
                _self.form.message = res.result.message;
            }
        });
    };
    BaseCtl.prototype.generateReport = function () {
        var _self = this;
        console.log('********* Generating Report ********************');
        this.serviceLocator.httpService.get(_self.api.report, function (res) {
            if (res.success) {
                console.log('*********  Report Generated ********************');
                alert('pass');
            }
            else {
                console.log('********* Error in Generating Report  ********************');
                alert('fail');
            }
        });
    };
    /**
     * Forward to page
     * @param page
     */
    BaseCtl.prototype.forward = function (page) {
        console.log(page + '--->>page value');
        this.serviceLocator.forward(page);
    };
    return BaseCtl;
}());



/***/ }),

/***/ "./src/app/college/college-list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/college/college-list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"content-wrapper\" style=\"padding-top: 3%;padding-bottom: 15%;\r\nbackground: url(assets/files/211.jpg) no-repeat center center;\r\n background-repeat: no-repeat;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: 90vh;\" >\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\" style=\"height: 70px;\">\r\n       <div class=\"text-center\">\r\n          <h1 class=\"text-white font-weight-bold\">{{'College List' | translate }}</h1>\r\n        </div>\r\n      </div> \r\n\r\n      <div class=\"row p-1\">\r\n        <div class=\"col-sm-1\"></div>\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.name\"\r\n            placeholder=\"{{'Search Name' | translate}}\">\r\n\r\n        </div>\r\n        <!-- <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.loginId\" placeholder=\"{{'Search Email' | translate}}\">\r\n        </div> -->\r\n        <div class=\"col-sm-2\">\r\n\r\n          <select class=\"form-control\" name=\"id\" [(ngModel)]=\"form.searchParams.id\" aria-label=\"ngSelected\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{' Select name' | translate }}</option>\r\n            <option *ngFor=\"let obj of form.preload.collegeList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n          </select>\r\n        </div>\r\n\r\n        \r\n        <div class=\"col-sm-2\">\r\n          <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.status\" placeholder=\"{{'Search Status' | translate}}\"> -->\r\n        </div>\r\n        <div class=\"col-sm-1 ml-3\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\r\n            {{'Search' | translate }}</button>\r\n        </div>\r\n        <div class=\"col-lg-2 ml-4\">\r\n          <button (click)=\"forward('/college')\" type=\"button\" class=\"btn btn-success\">{{'Add College' | translate}}\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n            {{'Delete'| translate}}</button>\r\n        </div>\r\n      </div>\r\n\r\n     \r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-striped table-hover font-weight-bold text-white\">\r\n            <thead class=\"thead-light text-uppercase\">\r\n              <tr>\r\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\" (change)=\"checkUncheckAll($event)\"/></th>\r\n                <th>{{'S.No.' | translate }}</th>\r\n                <th>{{'Name' | translate }}</th>\r\n                <th>{{'Address' | translate }}</th>\r\n                <th>{{'Phone' | translate }}</th>\r\n                <th>{{'City' | translate }}</th>\r\n                <th>{{'State' | translate }}</th>\r\n                <th>{{'Edit' | translate}}</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let m of form.list; let i = index\">\r\n                <td> <input type=\"checkbox\"  #checkboxes (change)=\"checklistUpdate()\"  name=\"list_name\"  id=\"{{m.id}}\" value=\"{{isMasterSel}}\"/>\r\n                </td>\r\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\r\n                <td> {{ m.name }} </td>\r\n                <td> {{ m.address }} </td>\r\n                <td> {{ m.phoneNo }} </td>\r\n                <td> {{ m.city }} </td>\r\n                <td> {{ m.state }} </td>\r\n                <td>\r\n                  <a (click)=\"forward( '/college/' +  m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-edit text-info\"></i>\r\n                  </a>\r\n                  <!-- /\r\n                  <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-trash text-danger\"></i>\r\n                  </a> -->\r\n                </td>\r\n                \r\n              </tr>\r\n            </tbody>\r\n            </table>\r\n              <table style=\"width: 100%;\">\r\n                <tr>\r\n                  <td style=\"width: 50%;\">\r\n              <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\r\n                }} </button></td>\r\n                <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\r\n                <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><a class=\"btn btn-warning mr-1\" [routerLink]=\"['/collegelist']\"  (click)=\"exit()\">{{'Back' | translate}}</a></td>\r\n    \r\n    \r\n            \r\n                <td><button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\r\n                  translate }}</button></td>\r\n                </tr>\r\n                </table>\r\n    \r\n            \r\n          \r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/college/college-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/college/college-list.component.ts ***!
  \***************************************************/
/*! exports provided: CollegeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollegeListComponent", function() { return CollegeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");





var CollegeListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CollegeListComponent, _super);
    function CollegeListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.COLLEGE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    CollegeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-college-list',
            template: __webpack_require__(/*! ./college-list.component.html */ "./src/app/college/college-list.component.html"),
            styles: [__webpack_require__(/*! ./college.component.css */ "./src/app/college/college.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CollegeListComponent);
    return CollegeListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/college/college.component.css":
/*!***********************************************!*\
  !*** ./src/app/college/college.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertRedColor {\r\n    color: red;\r\n}\r\n\r\n\r\n.required-field::after { \t\t\r\n  content: \"*\";\t\t\r\n  color: red;\t\t\r\n   }\r\n\r\n\r\n.successColor{\r\n    color: green;\r\n   }\r\n\r\n\r\n.btn-space {\r\n    margin-right: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29sbGVnZS9jb2xsZWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7OztBQUdBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7R0FDVDs7O0FBRUE7SUFDQyxZQUFZO0dBQ2I7OztBQUVBO0lBQ0MsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29sbGVnZS9jb2xsZWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnRSZWRDb2xvciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG5cclxuLnJlcXVpcmVkLWZpZWxkOjphZnRlciB7IFx0XHRcclxuICBjb250ZW50OiBcIipcIjtcdFx0XHJcbiAgY29sb3I6IHJlZDtcdFx0XHJcbiAgIH1cdFxyXG5cclxuICAgLnN1Y2Nlc3NDb2xvcntcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgfVxyXG5cclxuICAgLmJ0bi1zcGFjZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/college/college.component.html":
/*!************************************************!*\
  !*** ./src/app/college/college.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad{\r\n background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n background-repeat: no repeat;\r\n background-size: 100%;\r\n padding-bottom: 25px\r\n ;\r\n }\r\n</style>\r\n\r\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:3%;\r\nbackground: url(assets/files/wall.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add College' | translate }}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Update College' | translate }}</h2>\r\n\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Name' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"name\" [(ngModel)]=\"form.data.name\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Name' | translate }}\">\r\n              </div>\r\n            </div><span class=\"alertRedColor\"> {{form.inputerror.name}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Address' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-map-marker grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"addr\" [(ngModel)]=\"form.data.address\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Address' | translate }}\">\r\n              </div>\r\n              <span class=\"alertRedColor\"> {{form.inputerror.address}} </span>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'City' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-location-arrow grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"city\" [(ngModel)]=\"form.data.city\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter City' | translate }}\">\r\n              </div>\r\n              <span class=\"alertRedColor\"> {{form.inputerror.city}} </span>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'State' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-address-card grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"state\" [(ngModel)]=\"form.data.state\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter State' | translate }}\">\r\n              </div>\r\n              <span class=\"alertRedColor\"> {{form.inputerror.state}} </span>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Phone No.' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"phnNo\" [(ngModel)]=\"form.data.phoneNo\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Phone No.' | translate }}\">\r\n              </div>\r\n              <span class=\"alertRedColor\"> {{form.inputerror.phoneNo}} </span>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate }}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Update' | translate }}</button>\r\n            </div>\r\n\r\n            <div class=\"pl-3 pt-2\">\r\n              <button (click)=\"forward('/collegelist')\" type=\"button\"\r\n                class=\"btn btn-warning mr-1\">{{'List' | translate }}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/college/college.component.ts":
/*!**********************************************!*\
  !*** ./src/app/college/college.component.ts ***!
  \**********************************************/
/*! exports provided: CollegeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollegeComponent", function() { return CollegeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var CollegeComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CollegeComponent, _super);
    function CollegeComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.COLLEGE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    CollegeComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    CollegeComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.name);
        flag = flag && validator.isNotNullObject(form.phoneNo);
        return flag;
    };
    CollegeComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.name = data.name;
        form.address = data.address;
        form.state = data.state;
        form.city = data.city;
        form.phoneNo = data.phoneNo;
        console.log('Populated Form', form);
    };
    CollegeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-college',
            template: __webpack_require__(/*! ./college.component.html */ "./src/app/college/college.component.html"),
            styles: [__webpack_require__(/*! ./college.component.css */ "./src/app/college/college.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], CollegeComponent);
    return CollegeComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/company/company.component.css":
/*!***********************************************!*\
  !*** ./src/app/company/company.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnkvY29tcGFueS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/company/company.component.html":
/*!************************************************!*\
  !*** ./src/app/company/company.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n\r\n  .input-group-addon {\r\n    box-shadow: 9px 8px 7px #001a33;\r\n  }\r\n\r\n  .required-field {\r\n    color: red;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .alertRedColor {\r\n    color: red;\r\n  }\r\n\r\n  .card-body {\r\n    padding: 2rem;\r\n  }\r\n\r\n  .input-group-text i {\r\n    width: 1.5rem;\r\n  }\r\n\r\n  .btn-primary,\r\n  .btn-success,\r\n  .btn-warning {\r\n    width: 100%;\r\n  }\r\n\r\n  .form-control {\r\n    height: calc(2.25rem + 2px);\r\n  }\r\n\r\n  .form-group {\r\n    margin-bottom: 1.5rem;\r\n  }\r\n\r\n  .input-group-prepend .input-group-text {\r\n    background-color: #e9ecef;\r\n    border: 1px solid #ced4da;\r\n  }\r\n\r\n  .input-group-prepend .input-group-text i {\r\n    color: #495057;\r\n  }\r\n\r\n  .row {\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n  }\r\n\r\n  .textarea-height {\r\n    height: 100px;\r\n  }\r\n\r\n  .card {\r\n    margin: auto;\r\n    max-width: 500px;\r\n  }\r\n</style>\r\n\r\n<div class=\"container-fluid\"\r\n  style=\"padding: 2% 0; background: url('assets/files/wall.jpg') no-repeat center center; background-attachment: fixed; background-size: cover; width: 100%; height: auto;\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body input-group-addon grad\">\r\n          <form name=\"userForm\">\r\n            <h2 *ngIf=\"!form.data.id\" class=\"text-primary font-weight-bold text-center\">{{ 'Add Company' |\r\n              translate }}\r\n            </h2>\r\n            <h2 *ngIf=\"form.data.id\" class=\"text-primary font-weight-bold text-center\">{{ 'Update Company' |\r\n              translate }}\r\n            </h2>\r\n\r\n            <div *ngIf=\"!form.error && form.message\" class=\"alert alert-success alert-dismissible\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n              {{ form.message }}\r\n            </div>\r\n\r\n            <div *ngIf=\"form.error && form.message\" class=\"alert alert-danger alert-dismissible\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n              {{ form.message }}\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Experience' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-flag grey-text\"></i></div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"experienceId\" [(ngModel)]=\"form.data.experienceId\"\r\n                  aria-label=\"ngSelected\">\r\n                  <option [ngValue]=\"undefined\">{{ 'Select Experience' | translate }}</option>\r\n                  <option *ngFor=\"let obj of form.preload.experienceList\" [value]=\"obj.key\">{{ obj.key }}</option>\r\n                </select>\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.experienceId\" class=\"alertRedColor\">{{form.inputerror.experienceId}}</span>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Name' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></div>\r\n                </div>\r\n                <input type=\"text\" name=\"name\" [(ngModel)]=\"form.data.name\" class=\"form-control\"\r\n                  placeholder=\"{{ 'Enter name' | translate }}\" (keypress)=\"validateAlphabetInput($event)\">\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.name\" class=\"alertRedColor\">{{form.inputerror.name}}</span>\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Mobile' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i></div>\r\n                </div>\r\n                <input type=\"text\" name=\"mobile\" [(ngModel)]=\"form.data.mobile\" class=\"form-control\"\r\n                  placeholder=\"{{ 'Enter Mobile' | translate }}\" maxlength=\"10\" (keypress)=\"validatePhone($event)\">\r\n\r\n\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.mobile\" class=\"alertRedColor\">{{ form.inputerror.mobile}}</span>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Date of Joining' | translate }}</b><span class=\"required-field\"></span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-calendar-alt grey-text\"></i></div>\r\n                </div>\r\n                <input type=\"date\" name=\"dateOfJoining\" [value]=\"form.data.dateOfJoining | date:'yyyy-MM-dd'\"\r\n                  (input)=\"form.data.dateOfJoining=parseDate($event.target.value)\" class=\"form-control\" required />\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.dateOfJoining\" class=\"alertRedColor\">{{ form.inputerror.dateOfJoining\r\n                }}</span>\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Email' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></div>\r\n                </div>\r\n                <input type=\"text\" name=\"email\" [(ngModel)]=\"form.data.email\" class=\"form-control\"\r\n                  placeholder=\"{{ 'Enter email' | translate }}\">\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.email\" class=\"alertRedColor\">{{form.inputerror.email}}</span>\r\n            </div>\r\n\r\n            <div class=\"row pt-2 pb-3 justify-content-center\">\r\n              <div class=\"col-md-4\">\r\n                <button *ngIf=\"!form.data.id\" (click)=\"onUpload()\" class=\"btn btn-success\">{{ 'Save' | translate\r\n                  }}</button>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <button *ngIf=\"form.data.id\" (click)=\"onUpload()\" class=\"btn btn-success\">{{ 'Update' | translate\r\n                  }}</button>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <a class=\"btn btn-warning\" type=\"button\" [routerLink]=\"['/companylist']\">{{ 'List' | translate\r\n                  }}</a>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/company/company.component.ts":
/*!**********************************************!*\
  !*** ./src/app/company/company.component.ts ***!
  \**********************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var CompanyComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CompanyComponent, _super);
    function CompanyComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.COMPANY, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.getKey = false;
        _this.selected = null;
        _this.userForm = null;
        return _this;
    }
    CompanyComponent.prototype.submit = function () {
        var _self = this;
        console.log('in submit');
        console.log(this.form);
        console.log(this.form.data);
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {}; // Clear input errors here
            if (res.success) {
                _self.form.error = false; // Set error to false on success
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("----------Rahul----------.");
                // Clear form data if needed
                // _self.form.data = {};
            }
            else {
                _self.form.error = true;
                if (res.result.inputerror) {
                    _self.form.inputerror = res.result.inputerror;
                }
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    CompanyComponent.prototype.submit1 = function () {
        var _self = this;
        console.log(this.form + "submit running start");
        console.log(this.form.data + "form data going to be submit");
        this.serviceLocator.httpService.post(this.api.search, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            _self.form.data.id = res.result.data;
            if (res.success) {
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("--------------------.");
            }
            else {
                _self.form.error = true;
                _self.form.inputerror = res.result.inputerror;
                _self.form.message = res.result.message;
            }
            _self.form.data.id = res.result.data;
            console.log('FORM', _self.form);
        });
    };
    CompanyComponent.prototype.onUpload = function (userform) {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    CompanyComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.experienceId);
        console.log(form.experienceId);
        flag = flag && validator.isNotNullObject(form.name);
        console.log(form.name);
        flag = flag && validator.isNotNullObject(form.mobile);
        console.log(form.mobile);
        flag = flag && validator.isNotNullObject(form.dateOfJoining);
        console.log(form.dateOfJoining);
        flag = flag && validator.isNotNullObject(form.email);
        console.log(form.email);
        return flag;
    };
    CompanyComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        console.log(form.id + 'populate form in shoppingcomponent');
        form.name = data.name;
        form.mobile = data.mobile;
        form.dateOfJoining = data.dateOfJoining;
        form.experienceId = data.experienceId;
        form.email = data.email;
    };
    CompanyComponent.prototype.validatePhone = function (event) {
        var input = event.key;
        // Check if the input is a number or backspace
        if ((isNaN(Number(input)) && input !== 'Backspace') || (input === ' ')) {
            event.preventDefault();
        }
        // Limit the input to 10 characters
        if (this.form.data.phone && this.form.data.phone.length >= 10 && input !== 'Backspace') {
            event.preventDefault();
        }
    };
    CompanyComponent.prototype.validateAlphabetInput = function (event) {
        var charCode = event.which || event.keyCode;
        var charStr = String.fromCharCode(charCode);
        // Regular expression to test if the character is a letter
        if (!/^[a-zA-Z]+$/.test(charStr)) {
            event.preventDefault();
        }
    };
    CompanyComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    CompanyComponent.prototype.test = function () {
    };
    CompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-company',
            template: __webpack_require__(/*! ./company.component.html */ "./src/app/company/company.component.html"),
            styles: [__webpack_require__(/*! ./company.component.css */ "./src/app/company/company.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], CompanyComponent);
    return CompanyComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/company/companylist.component.css":
/*!***************************************************!*\
  !*** ./src/app/company/companylist.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnkvY29tcGFueWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/company/companylist.component.html":
/*!****************************************************!*\
  !*** ./src/app/company/companylist.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  #nnn {\r\n    background: none;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .panel-heading {\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .search-inputs {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .search-inputs .form-control,\r\n  .search-inputs .btn {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .content-wrapper {\r\n    background: url(assets/files/wall.jpg) no-repeat center center;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    width: auto;\r\n    height: 105vh;\r\n    padding: 20px;\r\n  }\r\n\r\n  .table-responsive {\r\n    margin-top: 20px;\r\n  }\r\n</style>\r\n\r\n<div class=\"content-wrapper\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\">\r\n        <h1 class=\"text-primary font-weight-bold\">{{ 'Company List' | translate }}</h1>\r\n      </div>\r\n\r\n      <div class=\"row search-inputs justify-content-center\">\r\n        <div class=\"col-md-3\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.name\"\r\n            placeholder=\"{{ 'Search name' | translate }}\" (input)=\"validateInput($event, 'name')\">\r\n          <div *ngIf=\"!isValidNameInput\" class=\"text-danger\">{{ nameErrorMessage }}</div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.mobile\"\r\n            placeholder=\"{{ 'Search mobile' | translate }}\" (input)=\"validateInput($event, 'mobile')\">\r\n          <div *ngIf=\"!isValidMobileInput\" class=\"text-danger\">{{ mobileErrorMessage }}</div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.searchParams.dateOfJoining\"\r\n            (ngModelChange)=\"formatDate($event)\" placeholder=\"{{ 'Search dateOfJoining' | translate }}\">\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <select class=\"form-control\" name=\"diseaseId\" [(ngModel)]=\"form.searchParams.experienceId\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{ 'Select experience' | translate }}</option>\r\n            <option *ngFor=\"let obj of form.preload.experienceList\" [value]=\"obj.key\">{{ obj.value }}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row mt-2 justify-content-center\">\r\n        <div class=\"col-md-2\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary btn-block\">{{ 'Search' | translate }}</button>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <button (click)=\"forward('/company')\" type=\"button\" class=\"btn btn-success btn-block\">{{ 'Add Company' |\r\n            translate }}</button>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger btn-block\">{{ 'Delete' | translate }}</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"form.error || form.message\" class=\"row mt-2 justify-content-center\">\r\n        <div class=\"col-md-6\">\r\n          <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{ form.message }}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{ form.message }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-responsive mt-3\">\r\n        <table class=\"table table-bordered table-hover font-weight-bold text-dark\">\r\n          <thead class=\"thead-dark text-uppercase\">\r\n            <tr align=\"center\">\r\n              <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\"\r\n                  (change)=\"checkUncheckAll($event)\" /></th>\r\n              <th>{{ 'S.No' }}</th>\r\n              <th>{{ 'name' }}</th>\r\n              <th>{{ 'mobile' }}</th>\r\n              <th>{{ 'dateOfJoining' }}</th>\r\n              <th>{{ 'experience' }}</th>\r\n              <th>{{ 'Edit' }}</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n              <td><input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" [id]=\"m.id\" /></td>\r\n              <td>{{ (form.pageNo * 5) + i + 1 }}</td>\r\n              <td>{{ m.name }}</td>\r\n              <td>{{ m.mobile }}</td>\r\n              <td>{{ convertToLocalDate(m.dateOfVisit) }}</td>\r\n              <td>{{ m.experienceName }}</td>\r\n              <td>\r\n                <button class=\"fa fa-edit text-primary\" id=\"nnn\" (click)=\"forward('/company/' + m.id)\"></button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <div class=\"d-flex justify-content-between mt-3\">\r\n        <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{ 'Previous' | translate\r\n          }}</button>\r\n        <div *ngIf=\"form.list.length == 0\">\r\n          <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/companylist']\" (click)=\"exit()\">{{ 'Back' |\r\n            translate }}</a>\r\n        </div>\r\n        <button (click)=\"next()\" [disabled]=\"nextList == 0\" class=\"btn btn-info\">{{ 'Next' | translate }}</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/company/companylist.component.ts":
/*!**************************************************!*\
  !*** ./src/app/company/companylist.component.ts ***!
  \**************************************************/
/*! exports provided: CompanylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanylistComponent", function() { return CompanylistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var CompanylistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CompanylistComponent, _super);
    function CompanylistComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.COMPANY, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null },
            inputerror: {},
            searchParams: {
                name: '',
                mobile: '',
                date: '',
                dateOfJoining: '',
                experienceId: ''
            },
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        _this.isValidMobileInput = true;
        _this.isValidNameInput = true;
        _this.nameErrorMessage = '';
        _this.mobileErrorMessage = '';
        return _this;
    }
    CompanylistComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    // Format date function
    CompanylistComponent.prototype.formatDate = function (event) {
        var selectedDate = new Date(event);
        var formattedDate = selectedDate.toISOString().split('T')[0];
        this.form.searchParams.date = formattedDate;
    };
    // Convert date to local format for display
    CompanylistComponent.prototype.convertToLocalDate = function (dateString) {
        var date = new Date(dateString);
        // Format date to 'MM/DD/YYYY'
        var options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return date.toLocaleDateString(undefined, options);
    };
    // Validate input for name and mobile fields
    CompanylistComponent.prototype.validateInput = function (event, field) {
        var value = event.target.value;
        if (field === 'mobile') {
            this.isValidMobileInput = /^[0-9]*$/.test(value); // Check if the input contains only numbers
            if (!this.isValidMobileInput) {
                this.mobileErrorMessage = 'Please type numbers only';
            }
            else {
                this.mobileErrorMessage = '';
            }
        }
        else if (field === 'name') {
            this.isValidNameInput = /^[A-Za-z\s]*$/.test(value); // Check if the input contains only letters and spaces
            if (!this.isValidNameInput) {
                this.nameErrorMessage = 'Please type alphabets only';
            }
            else {
                this.nameErrorMessage = '';
            }
        }
    };
    // Submit method
    CompanylistComponent.prototype.submit = function () {
        // Reset page number before searching
        this.form.pageNo = 0;
        // Call the search method after formatting the date
        this.search();
    };
    // Search method
    CompanylistComponent.prototype.search = function () {
        // Clear previous search message
        this.form.searchMessage = null;
        // Perform the search operation with the search parameters
        _super.prototype.search.call(this);
    };
    CompanylistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-companylist',
            template: __webpack_require__(/*! ./companylist.component.html */ "./src/app/company/companylist.component.html"),
            styles: [__webpack_require__(/*! ./companylist.component.css */ "./src/app/company/companylist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], CompanylistComponent);
    return CompanylistComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/course/course-list.component.html":
/*!***************************************************!*\
  !*** ./src/app/course/course-list.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"content-wrapper\"\r\n style=\"padding-top: 3%;\r\npadding-bottom: 15%;\r\nbackground: url(assets/files/wav1.jpg) no-repeat center center;\r\n background-repeat: no-repeat;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\nheight:90vh;\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\" style=\"height: 70px;\">\r\n        <div class=\"text-center\">\r\n          <h1 class=\"text-white font-weight-bold\">{{'Course List' | translate }}</h1>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row p-1\">\r\n        <div class=\"col-sm-1\"></div>\r\n        <div class=\"col-sm-2\">\r\n\r\n          <select class=\"form-control\" name=\"courseName\" [(ngModel)]=\"form.searchParams.id\" aria-label=\"ngSelected\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{' Select CourseName' | translate }}</option>\r\n            <option *ngFor=\"let obj of form.preload.courseList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n          </select>\r\n        </div>\r\n        <!-- <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.loginId\" placeholder=\"{{'Search Email' | translate}}\">\r\n        </div> -->\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.duration\"\r\n            placeholder=\"{{'Search Duration' | translate}}\">\r\n\r\n        </div>\r\n\r\n        \r\n        <div class=\"col-sm-2\">\r\n          <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.status\" placeholder=\"{{'Search Status' | translate}}\"> -->\r\n        </div>\r\n        <div class=\"col-sm-1 ml-3\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\r\n            {{'Search' | translate }}</button>\r\n        </div>\r\n        <div class=\"col-lg-2 ml-4\">\r\n          <button (click)=\"forward('/course')\" type=\"button\" class=\"btn btn-success\">{{'Add Course' | translate}}\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n            {{'Delete'| translate}}</button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n\r\n\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-striped table-hover font-weight-bold text-white\">\r\n            <thead class=\"thead-light text-uppercase\">\r\n              <tr>\r\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\"\r\n                    (change)=\"checkUncheckAll($event)\" /></th>\r\n                <th>{{'S.No.' | translate }}</th>\r\n                <th>{{'Name' | translate }}</th>\r\n                <th>{{'Duration' | translate }}</th>\r\n                <th>{{'Description' | translate }}</th>\r\n                <th>{{'Edit' | translate }}</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let m of form.list; let i = index\">\r\n                <td> <input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" id=\"{{m.id}}\" value=\"{{isMasterSel}}\" />\r\n                </td>\r\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\r\n                <td> {{ m.courseName}} </td>\r\n                <td> {{ m.duration }} </td>\r\n                <td> {{ m.description }} </td>\r\n                <td>\r\n                  <a (click)=\"forward( '/course/' +  m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-edit text-info\"></i>\r\n                  </a>\r\n                  <!-- /\r\n                  <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-trash text-danger\"></i>\r\n                  </a> -->\r\n                </td>\r\n\r\n              </tr>\r\n              \r\n            </tbody>\r\n          </table>\r\n          <table style=\"width: 100%;\">\r\n            <tr>\r\n              <td style=\"width: 50%;\">\r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\r\n            }} </button></td>\r\n            <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\r\n            <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><a class=\"btn btn-warning mr-1\" [routerLink]=\"['/courselist']\"  (click)=\"exit()\">{{'Back' | translate}}</a></td>\r\n\r\n        \r\n            <td><button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\r\n              translate }}</button></td>\r\n            </tr>\r\n            </table>\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/course/course-list.component.ts":
/*!*************************************************!*\
  !*** ./src/app/course/course-list.component.ts ***!
  \*************************************************/
/*! exports provided: CourseListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseListComponent", function() { return CourseListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");





var CourseListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CourseListComponent, _super);
    function CourseListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.COURSE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    CourseListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-list',
            template: __webpack_require__(/*! ./course-list.component.html */ "./src/app/course/course-list.component.html"),
            styles: [__webpack_require__(/*! ./course.component.css */ "./src/app/course/course.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CourseListComponent);
    return CourseListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/course/course.component.css":
/*!*********************************************!*\
  !*** ./src/app/course/course.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZS9jb3Vyc2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/course/course.component.html":
/*!**********************************************!*\
  !*** ./src/app/course/course.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad{\r\n background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n background-repeat: no repeat;\r\n background-size: 100%;\r\n padding-bottom: 25px\r\n ;\r\n }\r\n</style>\r\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:15%;\r\nbackground: url(assets/files/wall.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add Course' | translate }}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Update Course' | translate }}</h2>\r\n\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Course Name' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"courseName\" [(ngModel)]=\"form.data.courseName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Course Name' | translate }}\">\r\n              </div>\r\n            </div><span class=\"alertRedColor\"> {{form.inputerror.courseName}} </span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Duration' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\" >\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-clock-o grey-text\"></i> </div>\r\n                </div>\r\n            \r\n                <select class=\"form-control\" name=\"duration\"\r\n                  [(ngModel)]=\"form.data.duration\" style=\"cursor: pointer;\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{'Please select' | translate }}</option>\r\n                  <option [value]=\"1\">1 Year</option>\r\n                  <option [value]=\"2\">2 Year</option>\r\n                  <option [value]=\"3\">3 Year</option>\r\n                  <option [value]=\"4\">4 Year</option>\r\n                  <option [value]=\"5\">5 Year</option>\r\n\r\n                </select>\r\n              </div>\r\n              <span class=\"alertRedColor\"> {{form.inputerror.duration}} </span>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Description' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text\"></i> </div>\r\n                </div>\r\n                <textarea class=\"form-control\" placeholder=\"{{'Enter Description' | translate }}\" name=\"description\"\r\n                  [(ngModel)]=\"form.data.description\"></textarea>\r\n              </div>\r\n            </div><span class=\"alertRedColor\"> {{form.inputerror.description}} </span>\r\n          </div>\r\n\r\n\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate }}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Update' | translate }}</button>\r\n            </div>\r\n            <div class=\"pl-3 pt-2\">\r\n              <button (click)=\"forward('/courselist')\" type=\"button\" class=\"btn btn-warning mr-1\">{{'List\r\n                ' | translate }}              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/course/course.component.ts":
/*!********************************************!*\
  !*** ./src/app/course/course.component.ts ***!
  \********************************************/
/*! exports provided: CourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseComponent", function() { return CourseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");





var CourseComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CourseComponent, _super);
    function CourseComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.COURSE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.selected = null;
        return _this;
    }
    CourseComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    CourseComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.courseName);
        flag = flag && validator.isNotNullObject(form.duration);
        flag = flag && validator.isNotNullObject(form.description);
        return flag;
    };
    CourseComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.courseName = data.courseName;
        form.duration = data.duration;
        form.description = data.description;
        console.log('Populated Form', form);
    };
    CourseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course',
            template: __webpack_require__(/*! ./course.component.html */ "./src/app/course/course.component.html"),
            styles: [__webpack_require__(/*! ./course.component.css */ "./src/app/course/course.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CourseComponent);
    return CourseComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseCtl"]));



/***/ }),

/***/ "./src/app/customer/customer.component.css":
/*!*************************************************!*\
  !*** ./src/app/customer/customer.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL2N1c3RvbWVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/customer/customer.component.html":
/*!**************************************************!*\
  !*** ./src/app/customer/customer.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n\r\n  .input-group-addon {\r\n    box-shadow: 9px 8px 7px #001a33;\r\n  }\r\n\r\n  .required-field {\r\n    color: red;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .alertRedColor {\r\n    color: red;\r\n  }\r\n\r\n  .card-body {\r\n    padding: 2rem;\r\n  }\r\n\r\n  .input-group-text i {\r\n    width: 1.5rem;\r\n  }\r\n\r\n  .btn-primary,\r\n  .btn-success,\r\n  .btn-warning {\r\n    width: 100%;\r\n  }\r\n\r\n  .form-control {\r\n    height: calc(2.25rem + 2px);\r\n  }\r\n\r\n  .form-group {\r\n    margin-bottom: 1.5rem;\r\n  }\r\n\r\n  .input-group-prepend .input-group-text {\r\n    background-color: #e9ecef;\r\n    border: 1px solid #ced4da;\r\n  }\r\n\r\n  .input-group-prepend .input-group-text i {\r\n    color: #495057;\r\n  }\r\n\r\n  .row {\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n  }\r\n\r\n  .textarea-height {\r\n    height: 100px;\r\n  }\r\n\r\n  .card {\r\n    margin: auto;\r\n    max-width: 500px;\r\n  }\r\n</style>\r\n\r\n<div class=\"container-fluid\"\r\n  style=\"padding: 2% 0; background: url('assets/files/wall.jpg') no-repeat center center; background-attachment: fixed; background-size: cover; width: 100%; height: auto;\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body input-group-addon grad\">\r\n          <form name=\"userForm\">\r\n            <h2 *ngIf=\"!form.data.id\" class=\"text-primary font-weight-bold text-center\">{{ 'Add Customer' |\r\n              translate }}\r\n            </h2>\r\n            <h2 *ngIf=\"form.data.id\" class=\"text-primary font-weight-bold text-center\">{{ 'Update Customer' |\r\n              translate }}\r\n            </h2>\r\n\r\n            <div *ngIf=\"!form.error && form.message\" class=\"alert alert-success alert-dismissible\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n              {{ form.message }}\r\n            </div>\r\n\r\n            <div *ngIf=\"form.error && form.message\" class=\"alert alert-danger alert-dismissible\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n              {{ form.message }}\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Gender' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-flag grey-text\"></i></div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"genderId\" [(ngModel)]=\"form.data.genderId\"\r\n                  aria-label=\"ngSelected\">\r\n                  <option [ngValue]=\"undefined\">{{ 'Select gender' | translate }}</option>\r\n                  <option *ngFor=\"let obj of form.preload.genderList\" [value]=\"obj.key\">{{ obj.value }}</option>\r\n                </select>\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.genderId\" class=\"alertRedColor\">{{form.inputerror.genderId}}</span>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Name' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></div>\r\n                </div>\r\n                <input type=\"text\" name=\"name\" [(ngModel)]=\"form.data.name\" class=\"form-control\"\r\n                  placeholder=\"{{ 'Enter name' | translate }}\">\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.name\" class=\"alertRedColor\">{{form.inputerror.name}}</span>\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Phone Number' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i></div>\r\n                </div>\r\n                <input type=\"text\" name=\"phoneNumber\" [(ngModel)]=\"form.data.phoneNumber\" class=\"form-control\"\r\n                  placeholder=\"{{ 'Enter phoneNumber' | translate }}\" maxlength=\"10\" (keypress)=\"validatePhone($event)\">\r\n\r\n\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.phoneNumber\" class=\"alertRedColor\">{{ form.inputerror.phoneNumber}}</span>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Date of Birth' | translate }}</b><span class=\"required-field\"></span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-calendar-alt grey-text\"></i></div>\r\n                </div>\r\n                <input type=\"date\" name=\"dateOfBirth\" [value]=\"form.data.dateOfBirth | date:'yyyy-MM-dd'\"\r\n                  (input)=\"form.data.dateOfBirth=parseDate($event.target.value)\" class=\"form-control\" required />\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.dateOfBirth\" class=\"alertRedColor\">{{ form.inputerror.dateOfBirth\r\n                }}</span>\r\n            </div>\r\n\r\n            <div class=\"row pt-2 pb-3 justify-content-center\">\r\n              <div class=\"col-md-4\">\r\n                <button *ngIf=\"!form.data.id\" (click)=\"onUpload()\" class=\"btn btn-success\">{{ 'Save' | translate\r\n                  }}</button>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <button *ngIf=\"form.data.id\" (click)=\"onUpload()\" class=\"btn btn-success\">{{ 'Update' | translate\r\n                  }}</button>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <a class=\"btn btn-warning\" type=\"button\" [routerLink]=\"['/customerlist']\">{{ 'List' | translate\r\n                  }}</a>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/customer/customer.component.ts":
/*!************************************************!*\
  !*** ./src/app/customer/customer.component.ts ***!
  \************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var CustomerComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CustomerComponent, _super);
    function CustomerComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.CUSTOMER, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.getKey = false;
        _this.selected = null;
        _this.userForm = null;
        return _this;
    }
    CustomerComponent.prototype.submit = function () {
        var _self = this;
        console.log('in submit');
        console.log(this.form);
        console.log(this.form.data);
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {}; // Clear input errors here
            if (res.success) {
                _self.form.error = false; // Set error to false on success
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("----------Rahul----------.");
                // Clear form data if needed
                // _self.form.data = {};
            }
            else {
                _self.form.error = true;
                if (res.result.inputerror) {
                    _self.form.inputerror = res.result.inputerror;
                }
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    CustomerComponent.prototype.submit1 = function () {
        var _self = this;
        console.log(this.form + "submit running start");
        console.log(this.form.data + "form data going to be submit");
        this.serviceLocator.httpService.post(this.api.search, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            _self.form.data.id = res.result.data;
            if (res.success) {
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("--------------------.");
            }
            else {
                _self.form.error = true;
                _self.form.inputerror = res.result.inputerror;
                _self.form.message = res.result.message;
            }
            _self.form.data.id = res.result.data;
            console.log('FORM', _self.form);
        });
    };
    CustomerComponent.prototype.onUpload = function (userform) {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    CustomerComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.genderId);
        console.log(form.genderId);
        flag = flag && validator.isNotNullObject(form.name);
        console.log(form.name);
        flag = flag && validator.isNotNullObject(form.phoneNumber);
        console.log(form.phoneNumber);
        flag = flag && validator.isNotNullObject(form.dateOfBirth);
        console.log(form.dateOfBirth);
        return flag;
    };
    CustomerComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        console.log(form.id + 'populate form in shoppingcomponent');
        form.name = data.name;
        form.phoneNumber = data.phoneNumber;
        form.dateOfBirth = data.dateOfBirth;
        form.genderId = data.genderId;
    };
    CustomerComponent.prototype.validatePhone = function (event) {
        var input = event.key;
        // Check if the input is a number or backspace
        if ((isNaN(Number(input)) && input !== 'Backspace') || (input === ' ')) {
            event.preventDefault();
        }
        // Limit the input to 10 characters
        if (this.form.data.phone && this.form.data.phone.length >= 10 && input !== 'Backspace') {
            event.preventDefault();
        }
    };
    CustomerComponent.prototype.validateAlphabetInput = function (event) {
        var charCode = event.which || event.keyCode;
        var charStr = String.fromCharCode(charCode);
        // Regular expression to test if the character is a letter
        if (!/^[a-zA-Z]+$/.test(charStr)) {
            event.preventDefault();
        }
    };
    CustomerComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    CustomerComponent.prototype.test = function () {
    };
    CustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! ./customer.component.html */ "./src/app/customer/customer.component.html"),
            styles: [__webpack_require__(/*! ./customer.component.css */ "./src/app/customer/customer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], CustomerComponent);
    return CustomerComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/customer/customerlist.component.css":
/*!*****************************************************!*\
  !*** ./src/app/customer/customerlist.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL2N1c3RvbWVybGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/customer/customerlist.component.html":
/*!******************************************************!*\
  !*** ./src/app/customer/customerlist.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  #nnn {\r\n    background: none;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .panel-heading {\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .search-inputs {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .search-inputs .form-control,\r\n  .search-inputs .btn {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .content-wrapper {\r\n    background: url(assets/files/wall.jpg) no-repeat center center;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    width: auto;\r\n    height: 105vh;\r\n    padding: 20px;\r\n  }\r\n\r\n  .table-responsive {\r\n    margin-top: 20px;\r\n  }\r\n</style>\r\n\r\n<div class=\"content-wrapper\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\">\r\n        <h1 class=\"text-primary font-weight-bold\">{{ 'Customer List' | translate }}</h1>\r\n      </div>\r\n\r\n      <div class=\"row search-inputs justify-content-center\">\r\n        <div class=\"col-md-3\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.name\"\r\n            placeholder=\"{{ 'Search name' | translate }}\" (input)=\"validateInput($event, 'name')\">\r\n          <div *ngIf=\"!isValidNameInput\" class=\"text-danger\">{{ nameErrorMessage }}</div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.phoneNumber\"\r\n            placeholder=\"{{ 'Search phoneNumber' | translate }}\" (input)=\"validateInput($event, 'phoneNumber')\">\r\n          <div *ngIf=\"!isValidMobileInput\" class=\"text-danger\">{{ mobileErrorMessage }}</div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.searchParams.dateOfBirth\"\r\n            (ngModelChange)=\"formatDate($event)\" placeholder=\"{{ 'Search dateOfBirth' | translate }}\">\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <select class=\"form-control\" name=\"genderId\" [(ngModel)]=\"form.searchParams.genderId\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{ 'Select gender' | translate }}</option>\r\n            <option *ngFor=\"let obj of form.preload.genderList\" [value]=\"obj.key\">{{ obj.value }}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row mt-2 justify-content-center\">\r\n        <div class=\"col-md-2\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary btn-block\">{{ 'Search' | translate }}</button>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <button (click)=\"forward('/customer')\" type=\"button\" class=\"btn btn-success btn-block\">{{ 'Add customer' |\r\n            translate }}</button>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger btn-block\">{{ 'Delete' | translate }}</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"form.error || form.message\" class=\"row mt-2 justify-content-center\">\r\n        <div class=\"col-md-6\">\r\n          <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{ form.message }}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{ form.message }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-responsive mt-3\">\r\n        <table class=\"table table-bordered table-hover font-weight-bold text-dark\">\r\n          <thead class=\"thead-dark text-uppercase\">\r\n            <tr align=\"center\">\r\n              <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\"\r\n                  (change)=\"checkUncheckAll($event)\" /></th>\r\n              <th>{{ 'S.No' }}</th>\r\n              <th>{{ 'name' }}</th>\r\n              <th>{{ 'Phone Number' }}</th>\r\n              <th>{{ 'Date Of Birth' }}</th>\r\n              <th>{{ 'gender' }}</th>\r\n              <th>{{ 'Edit' }}</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n              <td><input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" [id]=\"m.id\" /></td>\r\n              <td>{{ (form.pageNo * 5) + i + 1 }}</td>\r\n              <td>{{ m.name }}</td>\r\n              <td>{{ m.phoneNumber }}</td>\r\n              <td>{{ convertToLocalDate(m.dateOfBirth) }}</td>\r\n              <td>{{ m.genderName }}</td>\r\n              <td>\r\n                <button class=\"fa fa-edit text-primary\" id=\"nnn\" (click)=\"forward('/customer/' + m.id)\"></button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <div class=\"d-flex justify-content-between mt-3\">\r\n        <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{ 'Previous' | translate\r\n          }}</button>\r\n        <div *ngIf=\"form.list.length == 0\">\r\n          <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/customerlist']\" (click)=\"exit()\">{{ 'Back' |\r\n            translate }}</a>\r\n        </div>\r\n        <button (click)=\"next()\" [disabled]=\"nextList == 0\" class=\"btn btn-info\">{{ 'Next' | translate }}</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/customer/customerlist.component.ts":
/*!****************************************************!*\
  !*** ./src/app/customer/customerlist.component.ts ***!
  \****************************************************/
/*! exports provided: CustomerlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerlistComponent", function() { return CustomerlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var CustomerlistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CustomerlistComponent, _super);
    function CustomerlistComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.CUSTOMER, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null },
            inputerror: {},
            searchParams: {
                name: '',
                mobile: '',
                date: '',
                dateOfJoining: '',
                experienceId: ''
            },
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        _this.isValidMobileInput = true;
        _this.isValidNameInput = true;
        _this.nameErrorMessage = '';
        _this.mobileErrorMessage = '';
        return _this;
    }
    CustomerlistComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    // Format date function
    CustomerlistComponent.prototype.formatDate = function (event) {
        var selectedDate = new Date(event);
        var formattedDate = selectedDate.toISOString().split('T')[0];
        this.form.searchParams.date = formattedDate;
    };
    // Convert date to local format for display
    CustomerlistComponent.prototype.convertToLocalDate = function (dateString) {
        var date = new Date(dateString);
        // Format date to 'MM/DD/YYYY'
        var options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return date.toLocaleDateString(undefined);
    };
    // Validate input for name and mobile fields
    CustomerlistComponent.prototype.validateInput = function (event, field) {
        var value = event.target.value;
        if (field === 'phoneNumber') {
            this.isValidMobileInput = /^[0-9]*$/.test(value); // Check if the input contains only numbers
            if (!this.isValidMobileInput) {
                this.mobileErrorMessage = 'Please type a 10 digit number';
            }
            else {
                this.mobileErrorMessage = '';
            }
        }
        else if (field === 'name') {
            this.isValidNameInput = /^[A-Za-z\s]*$/.test(value); // Check if the input contains only letters and spaces
            if (!this.isValidNameInput) {
                this.nameErrorMessage = 'Please type alphabets only';
            }
            else {
                this.nameErrorMessage = '';
            }
        }
    };
    // Submit method
    CustomerlistComponent.prototype.submit = function () {
        // Reset page number before searching
        this.form.pageNo = 0;
        // Call the search method after formatting the date
        this.search();
    };
    // Search method
    CustomerlistComponent.prototype.search = function () {
        // Clear previous search message
        this.form.searchMessage = null;
        // Perform the search operation with the search parameters
        _super.prototype.search.call(this);
    };
    CustomerlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customerlist',
            template: __webpack_require__(/*! ./customerlist.component.html */ "./src/app/customer/customerlist.component.html"),
            styles: [__webpack_require__(/*! ./customerlist.component.css */ "./src/app/customer/customerlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], CustomerlistComponent);
    return CustomerlistComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-navbar></app-navbar>\r\n<div>\r\n    <p class=\"text-info font-weight-bold\" style=\"padding-left: 30%; font-size: 70px;\">WELCOME TO ORS</p>\r\n    <div style=\"background-image: url(../../assets/files/IndexView.png); \r\n        -webkit-background-size: cover;\r\n        -moz-background-size: cover;\r\n        -o-background-size: cover;\r\n        background-size: 100%;\r\n        padding-bottom:18%;\r\n        padding-top: 5%;\r\n        \">\r\n        <p class=\"text-white font-weight-bold\" style=\"padding-top: 10%; padding-left: 25%; font-size: 20px;\">.</p>\r\n    </div>\r\n</div>\r\n<app-footer></app-footer> -->\r\n\r\n\r\n<style>\r\n  body{\r\n  \r\n  background-image: url('<%=ORSView.APP_CONTEXT%>/img/201.webp');\r\n      background-size: 100%;\r\n  \r\n  \r\n  }\r\n  .cl{\r\n    font-family: Lucida Calligraphy; \r\n  \r\n   /*  font-family: Monotype Corsiva;\r\n    \r\n   font-family: Footlight MT Light; */\r\n    }\r\n  </style>\r\n<app-navbar></app-navbar>\r\n\r\n<div>  \r\n  <!-- <div class=\"img-fluid\" style=\"background-image: url(../../assets/files/welcomeView2.png); \r\n      -webkit-background-size: cover;\r\n      -moz-background-size: cover;\r\n      -o-background-size: cover;\r\n      background-size: 100%;\r\n      padding-bottom:18%;\r\n      padding-top: 5%;\r\n      \">\r\n      <p class=\"text-white font-weight-bold\" style=\"padding-top: 10%; padding-left: 25%; font-size: 20px;\">.</p>\r\n  </div> -->\r\n\r\n  <div class=\"row \" style=\"padding-bottom: 14%;\r\n   background: url(assets/files/1026.jpg) no-repeat center center;\r\n   \r\n  background-attachment: fixed;\r\n  background-size: cover; width:cover;\r\n    height: 120vh;\">\r\n    <p class=\"text-cs1 font-family ml-4 font-weight-bold\" style=\"padding-top: 1%; \r\n    padding-left: 36%;font-size: 45px; color: rgb(4, 204, 226);\">{{'WELCOME TO ORS' | translate}}</p></div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/employee/employee.component.css":
/*!*************************************************!*\
  !*** ./src/app/employee/employee.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/employee/employee.component.html":
/*!**************************************************!*\
  !*** ./src/app/employee/employee.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n\r\n  .input-group-addon {\r\n    box-shadow: 9px 8px 7px #001a33;\r\n  }\r\n\r\n  .required-field {\r\n    color: red;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .alertRedColor {\r\n    color: red;\r\n  }\r\n\r\n  .card-body {\r\n    padding: 2rem;\r\n  }\r\n\r\n  .input-group-text i {\r\n    width: 1.5rem;\r\n  }\r\n\r\n  .btn-primary,\r\n  .btn-success,\r\n  .btn-warning {\r\n    width: 100%;\r\n  }\r\n\r\n  .form-control {\r\n    height: calc(2.25rem + 2px);\r\n  }\r\n\r\n  .form-group {\r\n    margin-bottom: 1.5rem;\r\n  }\r\n\r\n  .input-group-prepend .input-group-text {\r\n    background-color: #e9ecef;\r\n    border: 1px solid #ced4da;\r\n  }\r\n\r\n  .input-group-prepend .input-group-text i {\r\n    color: #495057;\r\n  }\r\n\r\n  .row {\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n  }\r\n\r\n  .textarea-height {\r\n    height: 100px;\r\n  }\r\n\r\n  .card {\r\n    margin: auto;\r\n    max-width: 500px;\r\n  }\r\n</style>\r\n\r\n<div class=\"container-fluid\"\r\n  style=\"padding: 2% 0; background: url('assets/files/wall.jpg') no-repeat center center; background-attachment: fixed; background-size: cover; width: 100%; height: auto;\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body input-group-addon grad\">\r\n          <form name=\"userForm\">\r\n            <h2 *ngIf=\"!form.data.id\" class=\"text-primary font-weight-bold text-center\">{{ 'Add Employee' |\r\n              translate }}\r\n            </h2>\r\n            <h2 *ngIf=\"form.data.id\" class=\"text-primary font-weight-bold text-center\">{{ 'Update Employee' |\r\n              translate }}\r\n            </h2>\r\n\r\n            <div *ngIf=\"!form.error && form.message\" class=\"alert alert-success alert-dismissible\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n              {{ form.message }}\r\n            </div>\r\n\r\n            <div *ngIf=\"form.error && form.message\" class=\"alert alert-danger alert-dismissible\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n              {{ form.message }}\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Department' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-flag grey-text\"></i></div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"departmentId\" [(ngModel)]=\"form.data.departmentId\"\r\n                  aria-label=\"ngSelected\">\r\n                  <option [ngValue]=\"undefined\">{{ 'Select department' | translate }}</option>\r\n                  <option *ngFor=\"let obj of form.preload.departmentList\" [value]=\"obj.key\">{{ obj.value }}</option>\r\n                </select>\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.departmentId\" class=\"alertRedColor\">{{form.inputerror.departmentId}}</span>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Name' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></div>\r\n                </div>\r\n                <input type=\"text\" name=\"name\" [(ngModel)]=\"form.data.name\" class=\"form-control\"\r\n                  placeholder=\"{{ 'Enter name' | translate }}\" (keypress)=\"validateAlphabetInput($event)\">\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.name\" class=\"alertRedColor\">{{form.inputerror.name}}</span>\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Last Employer Name' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></div>\r\n                </div>\r\n                <input type=\"text\" name=\"lastEmployerName\" [(ngModel)]=\"form.data.lastEmployerName\" class=\"form-control\"\r\n                  placeholder=\"{{ 'Enter last Employer Name' | translate }}\" (keypress)=\"validateAlphabetInput($event)\">\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.lastEmployerName\" class=\"alertRedColor\">{{form.inputerror.lastEmployerName}}</span>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Date Of Joining' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-calendar-alt grey-text\"></i></div>\r\n                </div>\r\n                <input type=\"date\" name=\"dateOfJoining\" [value]=\"form.data.dateOfJoining | date:'yyyy-MM-dd'\"\r\n                  (input)=\"form.data.dateOfJoining=parseDate($event.target.value)\" class=\"form-control\" required />\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.dateOfJoining\" class=\"alertRedColor\">{{ form.inputerror.dateOfJoining\r\n                }}</span>\r\n            </div>\r\n\r\n\r\n            <div class=\"row pt-2 pb-3 justify-content-center\">\r\n              <div class=\"col-md-4\">\r\n                <button *ngIf=\"!form.data.id\" (click)=\"onUpload()\" class=\"btn btn-success\">{{ 'Save' | translate\r\n                  }}</button>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <button *ngIf=\"form.data.id\" (click)=\"onUpload()\" class=\"btn btn-success\">{{ 'Update' | translate\r\n                  }}</button>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <a class=\"btn btn-warning\" type=\"button\" [routerLink]=\"['/employeelist']\">{{ 'List' | translate\r\n                  }}</a>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/employee/employee.component.ts":
/*!************************************************!*\
  !*** ./src/app/employee/employee.component.ts ***!
  \************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var EmployeeComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EmployeeComponent, _super);
    function EmployeeComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.EMPLOYEE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.getKey = false;
        _this.selected = null;
        _this.userForm = null;
        return _this;
    }
    EmployeeComponent.prototype.submit = function () {
        var _self = this;
        console.log('in submit');
        console.log(this.form);
        console.log(this.form.data);
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {}; // Clear input errors here
            if (res.success) {
                _self.form.error = false; // Set error to false on success
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("----------Rahul----------.");
                // Clear form data if needed
                // _self.form.data = {};
            }
            else {
                _self.form.error = true;
                if (res.result.inputerror) {
                    _self.form.inputerror = res.result.inputerror;
                }
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    EmployeeComponent.prototype.submit1 = function () {
        var _self = this;
        console.log(this.form + "submit running start");
        console.log(this.form.data + "form data going to be submit");
        this.serviceLocator.httpService.post(this.api.search, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            _self.form.data.id = res.result.data;
            if (res.success) {
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("--------------------.");
            }
            else {
                _self.form.error = true;
                _self.form.inputerror = res.result.inputerror;
                _self.form.message = res.result.message;
            }
            _self.form.data.id = res.result.data;
            console.log('FORM', _self.form);
        });
    };
    EmployeeComponent.prototype.onUpload = function (userform) {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    EmployeeComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.departmentId);
        console.log(form.departmentId);
        flag = flag && validator.isNotNullObject(form.name);
        console.log(form.name);
        flag = flag && validator.isNotNullObject(form.lastEmployerName);
        console.log(form.lastEmployerName);
        flag = flag && validator.isNotNullObject(form.dateOfJoining);
        console.log(form.dateOfJoining);
        return flag;
    };
    EmployeeComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        console.log(form.id + 'populate form in shoppingcomponent');
        form.name = data.name;
        form.lastEmployerName = data.lastEmployerName;
        form.dateOfJoining = data.dateOfJoining;
        form.departmentId = data.departmentId;
    };
    EmployeeComponent.prototype.validatePhone = function (event) {
        var input = event.key;
        // Check if the input is a number or backspace
        if ((isNaN(Number(input)) && input !== 'Backspace') || (input === ' ')) {
            event.preventDefault();
        }
        // Limit the input to 10 characters
        if (this.form.data.phone && this.form.data.phone.length >= 10 && input !== 'Backspace') {
            event.preventDefault();
        }
    };
    EmployeeComponent.prototype.validateAlphabetInput = function (event) {
        var charCode = event.which || event.keyCode;
        var charStr = String.fromCharCode(charCode);
        // Regular expression to test if the character is a letter
        if (!/^[a-zA-Z]+$/.test(charStr)) {
            event.preventDefault();
        }
    };
    EmployeeComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    EmployeeComponent.prototype.test = function () {
    };
    EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__(/*! ./employee.component.html */ "./src/app/employee/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.css */ "./src/app/employee/employee.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], EmployeeComponent);
    return EmployeeComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/employee/employeelist.component.css":
/*!*****************************************************!*\
  !*** ./src/app/employee/employeelist.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlL2VtcGxveWVlbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/employee/employeelist.component.html":
/*!******************************************************!*\
  !*** ./src/app/employee/employeelist.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  #nnn {\r\n    background: none;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .panel-heading {\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .search-inputs {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .search-inputs .form-control,\r\n  .search-inputs .btn {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .content-wrapper {\r\n    background: url(assets/files/wall.jpg) no-repeat center center;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    width: auto;\r\n    height: 105vh;\r\n    padding: 20px;\r\n  }\r\n\r\n  .table-responsive {\r\n    margin-top: 20px;\r\n  }\r\n</style>\r\n\r\n<div class=\"content-wrapper\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\">\r\n        <h1 class=\"text-primary font-weight-bold\">{{ 'Employee List' | translate }}</h1>\r\n      </div>\r\n\r\n      <div class=\"row search-inputs justify-content-center\">\r\n        <div class=\"col-md-3\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.name\"\r\n            placeholder=\"{{ 'Search Name' | translate }}\" (input)=\"validateInput($event, 'name')\">\r\n          <div *ngIf=\"!isValidNameInput\" class=\"text-danger\">{{ nameErrorMessage }}</div>\r\n        </div>\r\n        <!--  <div class=\"col-md-3\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.mobile\"\r\n            placeholder=\"{{ 'Search mobile' | translate }}\" (input)=\"validateInput($event, 'mobile')\">\r\n          <div *ngIf=\"!isValidMobileInput\" class=\"text-danger\">{{ mobileErrorMessage }}</div>\r\n        </div> -->\r\n\r\n        <div class=\"col-md-3\">\r\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.searchParams.dateOfJoining\"\r\n            (ngModelChange)=\"formatDate($event)\" placeholder=\"{{ 'Search dateOfJoining' | translate }}\">\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.lastEmployerName\"\r\n            placeholder=\"{{ 'Search lastEmployerName' | translate }}\">\r\n        </div>\r\n\r\n\r\n        <div class=\"col-md-3\">\r\n          <select class=\"form-control\" name=\"departmentId\" [(ngModel)]=\"form.searchParams.departmentId\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{ 'Select department' | translate }}</option>\r\n            <option *ngFor=\"let obj of form.preload.departmentList\" [value]=\"obj.key\">{{ obj.value }}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row mt-2 justify-content-center\">\r\n        <div class=\"col-md-2\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary btn-block\">{{ 'Search' | translate }}</button>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <button (click)=\"forward('/employee')\" type=\"button\" class=\"btn btn-success btn-block\">{{ 'Add Employee' |\r\n            translate }}</button>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger btn-block\">{{ 'Delete' | translate }}</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"form.error || form.message\" class=\"row mt-2 justify-content-center\">\r\n        <div class=\"col-md-6\">\r\n          <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{ form.message }}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{ form.message }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-responsive mt-3\">\r\n        <table class=\"table table-bordered table-hover font-weight-bold text-dark\">\r\n          <thead class=\"thead-dark text-uppercase\">\r\n            <tr align=\"center\">\r\n              <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\"\r\n                  (change)=\"checkUncheckAll($event)\" /></th>\r\n              <th>{{ 'S.No' }}</th>\r\n              <th>{{ 'name' }}</th>\r\n              <th>{{ 'last employer name' }}</th>\r\n              <th>{{ 'date of joining' }}</th>\r\n              <th>{{ 'department' }}</th>\r\n              <th>{{ 'Edit' }}</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n              <td><input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" [id]=\"m.id\" /></td>\r\n              <td>{{ (form.pageNo * 5) + i + 1 }}</td>\r\n              <td>{{ m.name }}</td>\r\n              <td>{{ m.lastEmployerName }}</td>\r\n              <td>{{ convertToLocalDate(m.dateOfJoining) }}</td>\r\n              <td>{{ m.departmentName }}</td>\r\n              <td>\r\n                <button class=\"fa fa-edit text-primary\" id=\"nnn\" (click)=\"forward('/inventory/' + m.id)\"></button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <div class=\"d-flex justify-content-between mt-3\">\r\n        <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{ 'Previous' | translate\r\n          }}</button>\r\n        <div *ngIf=\"form.list.length == 0\">\r\n          <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/employeelist']\" (click)=\"exit()\">{{ 'Back' |\r\n            translate }}</a>\r\n        </div>\r\n        <button (click)=\"next()\" [disabled]=\"nextList == 0\" class=\"btn btn-info\">{{ 'Next' | translate }}</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/employee/employeelist.component.ts":
/*!****************************************************!*\
  !*** ./src/app/employee/employeelist.component.ts ***!
  \****************************************************/
/*! exports provided: EmployeelistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeelistComponent", function() { return EmployeelistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var EmployeelistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EmployeelistComponent, _super);
    function EmployeelistComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.EMPLOYEE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null },
            inputerror: {},
            searchParams: {
                name: '',
                lastEmployerName: '',
                date: '',
                dateOfJoining: '',
                departmentId: ''
            },
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        _this.isValidMobileInput = true;
        _this.isValidNameInput = true;
        _this.nameErrorMessage = '';
        _this.mobileErrorMessage = '';
        return _this;
    }
    EmployeelistComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    // Format date function
    EmployeelistComponent.prototype.formatDate = function (event) {
        var selectedDate = new Date(event);
        var formattedDate = selectedDate.toISOString().split('T')[0];
        this.form.searchParams.date = formattedDate;
    };
    // Convert date to local format for display
    EmployeelistComponent.prototype.convertToLocalDate = function (dateString) {
        var date = new Date(dateString);
        // Format date to 'MM/DD/YYYY'
        var options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return date.toLocaleDateString(undefined, options);
    };
    // Validate input for name and mobile fields
    EmployeelistComponent.prototype.validateInput = function (event, field) {
        var value = event.target.value;
        if (field === 'mobile') {
            this.isValidMobileInput = /^[0-9]*$/.test(value); // Check if the input contains only numbers
            if (!this.isValidMobileInput) {
                this.mobileErrorMessage = 'Please type numbers only';
            }
            else {
                this.mobileErrorMessage = '';
            }
        }
        else if (field === 'name') {
            this.isValidNameInput = /^[A-Za-z\s]*$/.test(value); // Check if the input contains only letters and spaces
            if (!this.isValidNameInput) {
                this.nameErrorMessage = 'Please type alphabets only';
            }
            else {
                this.nameErrorMessage = '';
            }
        }
    };
    // Submit method
    EmployeelistComponent.prototype.submit = function () {
        // Reset page number before searching
        this.form.pageNo = 0;
        // Call the search method after formatting the date
        this.search();
    };
    // Search method
    EmployeelistComponent.prototype.search = function () {
        // Clear previous search message
        this.form.searchMessage = null;
        // Perform the search operation with the search parameters
        _super.prototype.search.call(this);
    };
    EmployeelistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employeelist',
            template: __webpack_require__(/*! ./employeelist.component.html */ "./src/app/employee/employeelist.component.html"),
            styles: [__webpack_require__(/*! ./employeelist.component.css */ "./src/app/employee/employeelist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], EmployeelistComponent);
    return EmployeelistComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/endpoint-service.service.ts":
/*!*********************************************!*\
  !*** ./src/app/endpoint-service.service.ts ***!
  \*********************************************/
/*! exports provided: EndpointServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndpointServiceService", function() { return EndpointServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EndpointServiceService = /** @class */ (function () {
    function EndpointServiceService() {
        this.SERVER_URL = "http://localhost:8084";
        this.MESSAGE = this.SERVER_URL + "/Message";
        this.USER = this.SERVER_URL + "/User";
        this.SHOPPING = this.SERVER_URL + "/Shopping";
        this.PAYMENT = this.SERVER_URL + "/Payment";
        this.CLIENT = this.SERVER_URL + "/Client";
        this.ATMS = this.SERVER_URL + "/ATMs";
        this.CUSTOMER = this.SERVER_URL + "/Customer";
        this.TRANSACTIONS = this.SERVER_URL + "/Transactions";
        this.ROUTE = this.SERVER_URL + "/Route";
        this.LOANS = this.SERVER_URL + "/Loans";
        this.PROJECT = this.SERVER_URL + "/Project";
        this.JOB = this.SERVER_URL + "/Job";
        this.ISSUE = this.SERVER_URL + "/Issue";
        this.PRIORITY = this.SERVER_URL + "/Priority";
        this.EMPLOYEE = this.SERVER_URL + "/Employee";
        this.TRANSPORTATION = this.SERVER_URL + "/Transportation";
        this.COMPANY = this.SERVER_URL + "/Company";
        this.ROLE = this.SERVER_URL + "/Role";
        this.ORDER = this.SERVER_URL + "/Order";
        this.SUPPLIER = this.SERVER_URL + "/Supplier";
        this.INVENTORY = this.SERVER_URL + "/Inventory";
        this.VEHICLETRACKING = this.SERVER_URL + "/VehicleTracking";
        this.PRODUCTDETAILS = this.SERVER_URL + "/ProductDetails";
        this.PRODUCT = this.SERVER_URL + "/Product";
        this.PATIENT = this.SERVER_URL + "/Patient";
        this.COLLEGE = this.SERVER_URL + "/College";
        this.MARKSHEET = this.SERVER_URL + "/Marksheet";
        this.STUDENT = this.SERVER_URL + "/Student";
        this.SUBJECT = this.SERVER_URL + "/Subject";
        this.FACULTY = this.SERVER_URL + "/Faculty";
        this.COURSE = this.SERVER_URL + "/Course";
        this.TIMETABLE = this.SERVER_URL + "/TimeTable";
        this.JASPERREPORT = this.SERVER_URL + "/Jasper";
    }
    EndpointServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EndpointServiceService);
    return EndpointServiceService;
}());



/***/ }),

/***/ "./src/app/faculty/faculty-list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/faculty/faculty-list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"content-wrapper\" style=\"padding-top: 3%;padding-bottom: 15%; \r\nbackground: url(assets/files/gettyimages-1132439283-640x640.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: 90vh;\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\" style=\"height: 70px;\">\r\n        <div class=\"text-center\">\r\n          <h1 class=\"text-primary font-weight-bold\">{{'Faculty List' | translate }}</h1>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row p-1\">\r\n        <div class=\"col-sm-1\"></div>\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.collegeName\"\r\n            placeholder=\"{{'Search College' | translate}}\">\r\n\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.subjectName\"\r\n            placeholder=\"{{'Search Subject' | translate}}\">\r\n\r\n        </div>\r\n        <!-- <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.loginId\" placeholder=\"{{'Search Email' | translate}}\">\r\n        </div> -->\r\n\r\n        \r\n\r\n        \r\n        <div class=\"col-sm-2\">\r\n          <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.status\" placeholder=\"{{'Search Status' | translate}}\"> -->\r\n        </div>\r\n        <div class=\"col-sm-1 ml-3\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\r\n            {{'Search' | translate }}</button>\r\n        </div>\r\n        <div class=\"col-lg-2 ml-4\">\r\n          <button (click)=\"forward('/faculty')\" type=\"button\" class=\"btn btn-success\">{{'Add Faculty' | translate}}\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n            {{'Delete'| translate}}</button>\r\n        </div>\r\n      </div>\r\n\r\n      \r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-striped table-hover\">\r\n            <thead class=\"thead-light text-uppercase\">\r\n              <tr>\r\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\" (change)=\"checkUncheckAll($event)\"/></th>\r\n                <th>{{'S.No.' | translate}}</th>\r\n                <th>{{'Name' | translate}}</th>\r\n                <th>{{'DOB' | translate}}</th>\r\n                <th>{{'Gender' | translate}}</th>\r\n                <th>{{'College' | translate}}</th>\r\n                <th>{{'Course' | translate}}</th>\r\n                <th>{{'Subject' | translate}}</th>\r\n                <th>{{'Mobile' | translate}}</th>\r\n                <th>{{'Email' | translate}}</th>\r\n                <th>{{'Qualification' | translate}}</th>\r\n                <th>{{'Edit' | translate}}</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let m of form.list; let i = index\">\r\n                <td> <input type=\"checkbox\"  #checkboxes (change)=\"checklistUpdate()\"  name=\"list_name\"  id=\"{{m.id}}\" value=\"{{isMasterSel}}\"/>\r\n                </td>\r\n                <td>{{(form.pageNo*5)+i+ 1}} </td>\r\n                <td>{{ m.firstName }} {{m.lastName}} </td>\r\n                <td>{{m.dob | date : 'dd-MM-yyyy'}} </td>\r\n                <td>{{ m.gender }} </td>\r\n                <td>{{m.collegeName}}</td>\r\n                <td>{{m.courseName}}</td>\r\n                <td>{{m.subjectName}}</td>\r\n                <td>{{ m.phoneNo}}</td>\r\n                <td>{{m.email}}</td>\r\n                <td>{{m.qualification}}</td>\r\n                <td>\r\n                  <a (click)=\"forward( '/faculty/' +  m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-edit text-info\"></i>\r\n                  </a>\r\n                  <!-- /\r\n                  <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-trash  text-danger\"></i>\r\n                  </a> -->\r\n                </td>\r\n\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <table style=\"width: 100%;\">\r\n            <tr>\r\n              <td style=\"width: 50%;\">\r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\r\n            }} </button></td>\r\n            <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\r\n            <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><a class=\"btn btn-warning mr-1\" [routerLink]=\"['/facultylist']\"  (click)=\"exit()\">{{'Back' | translate}}</a></td>\r\n\r\n\r\n        \r\n            <td><button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\r\n              translate }}</button></td>\r\n            </tr>\r\n            </table>\r\n\r\n            \r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/faculty/faculty-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/faculty/faculty-list.component.ts ***!
  \***************************************************/
/*! exports provided: FacultyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacultyListComponent", function() { return FacultyListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");





var FacultyListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FacultyListComponent, _super);
    function FacultyListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.FACULTY, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    FacultyListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faculty-list',
            template: __webpack_require__(/*! ./faculty-list.component.html */ "./src/app/faculty/faculty-list.component.html"),
            styles: [__webpack_require__(/*! ./faculty.component.css */ "./src/app/faculty/faculty.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], FacultyListComponent);
    return FacultyListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/faculty/faculty.component.css":
/*!***********************************************!*\
  !*** ./src/app/faculty/faculty.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhY3VsdHkvZmFjdWx0eS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/faculty/faculty.component.html":
/*!************************************************!*\
  !*** ./src/app/faculty/faculty.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n</style>\r\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:3%;\r\nbackground: url(assets/files/wall.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add Faculty'\r\n            | translate}}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Update\r\n            Faculty' | translate}}</h2>\r\n\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'First Name' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"firstName\" [(ngModel)]=\"form.data.firstName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter First Name' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.firstName}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Last Name' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"lastName\" [(ngModel)]=\"form.data.lastName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Last Name' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.lastName}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Email' | translate}} </b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"email\" [(ngModel)]=\"form.data.email\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Email Id' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.email}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Qualification' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-graduation-cap grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"qualification\" [(ngModel)]=\"form.data.qualification\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Your Qualification' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.qualification}} </span>\r\n          </div>\r\n\r\n\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Subject' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"subjectId\" [(ngModel)]=\"form.data.subjectId\"\r\n                  style=\"cursor: pointer;\">\r\n                  <option *ngFor=\"let obj of form.preload.subjectList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n                </select>\r\n              </div>\r\n              <span class=\"alertRedColor\"> {{form.inputerror.subject}} </span>\r\n            </div>\r\n          </div>\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'College' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-university grey-text\"></i> </div>\r\n                </div>\r\n\r\n\r\n                <select class=\"form-control\" name=\"collegeId\" [(ngModel)]=\"form.data.collegeId\"\r\n                  style=\"cursor: pointer;\">\r\n                  <option *ngFor=\"let obj of form.preload.collegeList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.qualification}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Course' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-list grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"courseId\" [(ngModel)]=\"form.data.courseId\" style=\"cursor: pointer;\">\r\n                  <option *ngFor=\"let obj of form.preload.courseList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.qualification}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Gender' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-venus grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"gender\" [(ngModel)]=\"form.data.gender\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{'Please select' | translate}}</option>\r\n                  <option value=\"Male\">{{'Male' | translate}} </option>\r\n                  <option value=\"Female\">{{'Female' | translate}} </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Mobile No' | translate}} </b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"phoneNo\" [(ngModel)]=\"form.data.phoneNo\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Mobile Number' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.phoneNo}} </span>\r\n          </div>\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'DOB' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"date\" name=\"dob\" [value]=\"form.data.dob| date:'yyyy-MM-dd'\"\r\n                  (input)=\"form.data.dob=parseDate($event.target.value)\" class=\"form-control form-control-sm\"\r\n                  required />\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.dob}} </span>\r\n          </div>\r\n\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate}}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Update' | translate}}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button (click)=\"forward('/facultylist')\" type=\"button\" class=\"btn btn-warning mr-1\">{{'List' |\r\n                translate}}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/faculty/faculty.component.ts":
/*!**********************************************!*\
  !*** ./src/app/faculty/faculty.component.ts ***!
  \**********************************************/
/*! exports provided: FacultyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacultyComponent", function() { return FacultyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");





var FacultyComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FacultyComponent, _super);
    function FacultyComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.FACULTY, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.selected = null;
        return _this;
    }
    FacultyComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    FacultyComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.firstName);
        console.log(form.firstName);
        flag = flag && validator.isNotNullObject(form.lastName);
        console.log(form.lastName);
        flag = flag && validator.isNotNullObject(form.email);
        console.log(form.email);
        flag = flag && validator.isNotNullObject(form.qualification);
        console.log(form.qualification);
        flag = flag && validator.isNotNullObject(form.gender);
        console.log(form.gender);
        flag = flag && validator.isNotNullObject(form.phoneNo);
        console.log(form.phoneNo + "in validateForm----------------------------");
        flag = flag && validator.isNotNullObject(form.courseId);
        console.log(form.courseId);
        flag = flag && validator.isNotNullObject(form.collegeId);
        console.log(form.collegeId);
        flag = flag && validator.isNotNullObject(form.subjectId);
        console.log(form.subjectId);
        return flag;
    };
    FacultyComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.subjectId = data.subjectId;
        console.log(form.subjectId + 'subject--');
        form.collegeId = data.collegeId;
        form.courseId = data.courseId;
        console.log(form.courseId + 'course ----');
        form.firstName = data.firstName;
        form.lastName = data.lastName;
        form.email = data.email;
        form.qualification = data.qualification;
        form.gender = data.gender;
        form.dob = data.dob;
        form.phoneNo = data.phoneNo;
        console.log("phoneno----------------" + form.phoneNo);
    };
    FacultyComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    FacultyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faculty',
            template: __webpack_require__(/*! ./faculty.component.html */ "./src/app/faculty/faculty.component.html"),
            styles: [__webpack_require__(/*! ./faculty.component.css */ "./src/app/faculty/faculty.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], FacultyComponent);
    return FacultyComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseCtl"]));



/***/ }),

/***/ "./src/app/file/file.component.css":
/*!*****************************************!*\
  !*** ./src/app/file/file.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbGUvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/file/file.component.html":
/*!******************************************!*\
  !*** ./src/app/file/file.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container row\">\r\n\r\n    <div class=\"col-md-12\">\r\n\r\n        <h1 class=\"text-primary pt-4\">Upload Image Test Page</h1>\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n<div class=\"container row pl-4\">\r\n <div class=\"form-group\">\r\n        <input type=\"file\" id=\"file\" (change)=\"handleFileInput($event.target.files)\">\r\n    </div>\r\n\r\n    <div class=\"col-md-6\">\r\n\r\n        <input type=\"button\" class=\"btn btn-success\" (click)=\"onUpload()\" value=\"upload\">\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n<hr />\r\n<!--   \r\n  <div class=\"container row\">\r\n  \r\n      <div class=\"col-md-12\">\r\n  \r\n          <div *ngIf=message>{{message}}</div>\r\n  \r\n      </div>\r\n  \r\n  </div>\r\n  \r\n  \r\n  <div class=\"container row\">\r\n  \r\n      <div class=\"col-md-6\">\r\n\r\n          <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"image name\" [(ngModel)]=\"imageName\"\r\n  \r\n              name=\"name\" />\r\n  \r\n      </div>\r\n  \r\n      <div class=\"col-md-6\">\r\n  \r\n          <input type=\"button\" (click)=\"getImage()\" value=\"Get Image\">\r\n  \r\n      </div>\r\n  \r\n  </div>\r\n  \r\n  \r\n  <div class=\"container row\">\r\n  \r\n      <div class=\"col-md-12\">\r\n            <div *ngIf=retrievedImage>\r\n  \r\n              <img [src]=\"retrievedImage\">\r\n  \r\n          </div>\r\n  \r\n      </div>\r\n  \r\n  </div> -->"

/***/ }),

/***/ "./src/app/file/file.component.ts":
/*!****************************************!*\
  !*** ./src/app/file/file.component.ts ***!
  \****************************************/
/*! exports provided: FileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileComponent", function() { return FileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var FileComponent = /** @class */ (function () {
    function FileComponent(formBuilder, httpClient) {
        this.formBuilder = formBuilder;
        this.httpClient = httpClient;
        this.fileToUpload = null;
    }
    FileComponent.prototype.ngOnInit = function () { };
    FileComponent.prototype.handleFileInput = function (files) {
        this.fileToUpload = files.item(0);
        console.log(this.fileToUpload);
    };
    FileComponent.prototype.onUpload = function () {
        var _this = this;
        this.onSubmit(this.fileToUpload).subscribe(function (data) {
            console.log(_this.fileToUpload);
        }, function (error) {
            console.log(error);
        });
    };
    FileComponent.prototype.onSubmit = function (fileToUpload) {
        var formData = new FormData();
        formData.append('file', fileToUpload);
        return this.httpClient.post("http://localhost:8080/User/profilePic/1", formData);
    };
    FileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-file',
            template: __webpack_require__(/*! ./file.component.html */ "./src/app/file/file.component.html"),
            styles: [__webpack_require__(/*! ./file.component.css */ "./src/app/file/file.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], FileComponent);
    return FileComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer{\r\n    position: fixed;\r\n    \r\n    bottom: 0px;\r\n    height: 40px;\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTs7SUFFZixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlcntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIFxyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"text-center \"\r\n style=\"background: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\">\r\n  <!-- Copyright -->\r\n  <div class=\"text-center pt-2 pb-2 text-light\" >\r\n    &copy; {{'COPYRIGHT' | translate}}\r\n    <a class=\"text-light\" href=\"\">{{'NCS PVT. LTD' | translate}}</a>\r\n  </div>\r\n  <!-- Copyright -->\r\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/http-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/http-service.service.ts ***!
  \*****************************************/
/*! exports provided: HttpServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpServiceService", function() { return HttpServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HttpServiceService = /** @class */ (function () {
    function HttpServiceService(router, httpClient) {
        this.router = router;
        this.httpClient = httpClient;
        this.form = {
            message: '',
            error: false
        };
        this.userparams = {
            url: '',
            sessionExpiredMsg: '',
            methodType: '',
        };
    }
    HttpServiceService.prototype.get = function (endpoint, callback) {
        var _this = this;
        var self = this;
        return this.httpClient.get(endpoint, { withCredentials: true }).subscribe(function (data) {
            console.log('Data :: ' + data);
            callback(data);
        }, function (error) {
            console.log('ORS Error--', error);
            if (error.status === 401) {
                localStorage.clear();
                self.userparams.url = _this.router.url;
                _this.router.navigate(['/login'], {
                    queryParams: { errorMessage: error.error.error },
                });
            }
        });
    };
    HttpServiceService.prototype.post = function (endpoint, bean, callback) {
        var _this = this;
        var self = this;
        return this.httpClient.post(endpoint, bean, { withCredentials: true }).subscribe(function (data) {
            console.log(data);
            callback(data);
        }, function (error) {
            console.log('ORS Error--', error);
            if (error.status === 401) {
                localStorage.clear();
                _this.router.navigate(['/login'], {
                    queryParams: { errorMessage: error.error.error },
                });
            }
        });
        "";
    };
    HttpServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpServiceService);
    return HttpServiceService;
}());



/***/ }),

/***/ "./src/app/inventory/inventory.component.css":
/*!***************************************************!*\
  !*** ./src/app/inventory/inventory.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludmVudG9yeS9pbnZlbnRvcnkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/inventory/inventory.component.html":
/*!****************************************************!*\
  !*** ./src/app/inventory/inventory.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n\r\n  .input-group-addon {\r\n    box-shadow: 9px 8px 7px #001a33;\r\n  }\r\n\r\n  .required-field {\r\n    color: red;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .alertRedColor {\r\n    color: red;\r\n  }\r\n\r\n  .card-body {\r\n    padding: 2rem;\r\n  }\r\n\r\n  .input-group-text i {\r\n    width: 1.5rem;\r\n  }\r\n\r\n  .btn-primary,\r\n  .btn-success,\r\n  .btn-warning {\r\n    width: 100%;\r\n  }\r\n\r\n  .form-control {\r\n    height: calc(2.25rem + 2px);\r\n  }\r\n\r\n  .form-group {\r\n    margin-bottom: 1.5rem;\r\n  }\r\n\r\n  .input-group-prepend .input-group-text {\r\n    background-color: #e9ecef;\r\n    border: 1px solid #ced4da;\r\n  }\r\n\r\n  .input-group-prepend .input-group-text i {\r\n    color: #495057;\r\n  }\r\n\r\n  .row {\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n  }\r\n\r\n  .textarea-height {\r\n    height: 100px;\r\n  }\r\n\r\n  .card {\r\n    margin: auto;\r\n    max-width: 500px;\r\n  }\r\n</style>\r\n\r\n<div class=\"container-fluid\"\r\n  style=\"padding: 2% 0; background: url('assets/files/wall.jpg') no-repeat center center; background-attachment: fixed; background-size: cover; width: 100%; height: auto;\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body input-group-addon grad\">\r\n          <form name=\"userForm\">\r\n            <h2 *ngIf=\"!form.data.id\" class=\"text-primary font-weight-bold text-center\">{{ 'Add Inventory' |\r\n              translate }}\r\n            </h2>\r\n            <h2 *ngIf=\"form.data.id\" class=\"text-primary font-weight-bold text-center\">{{ 'Update Inventory' |\r\n              translate }}\r\n            </h2>\r\n\r\n            <div *ngIf=\"!form.error && form.message\" class=\"alert alert-success alert-dismissible\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n              {{ form.message }}\r\n            </div>\r\n\r\n            <div *ngIf=\"form.error && form.message\" class=\"alert alert-danger alert-dismissible\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n              {{ form.message }}\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Product' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-flag grey-text\"></i></div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"productId\" [(ngModel)]=\"form.data.productId\"\r\n                  aria-label=\"ngSelected\">\r\n                  <option [ngValue]=\"undefined\">{{ 'Select product' | translate }}</option>\r\n                  <option *ngFor=\"let obj of form.preload.productList\" [value]=\"obj.key\">{{ obj.value }}</option>\r\n                </select>\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.productId\" class=\"alertRedColor\">{{form.inputerror.productId}}</span>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Supplier Name' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></div>\r\n                </div>\r\n                <input type=\"text\" name=\"supplierName\" [(ngModel)]=\"form.data.supplierName\" class=\"form-control\"\r\n                  placeholder=\"{{ 'Enter supplierName' | translate }}\" (keypress)=\"validateAlphabetInput($event)\">\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.supplierName\" class=\"alertRedColor\">{{form.inputerror.supplierName}}</span>\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Quantity' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i></div>\r\n                </div>\r\n                <input type=\"number\" name=\"quantity\" [(ngModel)]=\"form.data.quantity\" class=\"form-control\"\r\n                  placeholder=\"{{ 'Enter quantity' | translate }}\">\r\n\r\n\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.quantity\" class=\"alertRedColor\">{{ form.inputerror.quantity}}</span>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Last Updated Date' | translate }}</b><span class=\"required-field\"></span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-calendar-alt grey-text\"></i></div>\r\n                </div>\r\n                <input type=\"date\" name=\"lastUpdatedDate\" [value]=\"form.data.lastUpdatedDate | date:'yyyy-MM-dd'\"\r\n                  (input)=\"form.data.lastUpdatedDate=parseDate($event.target.value)\" class=\"form-control\" required />\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.lastUpdatedDate\" class=\"alertRedColor\">{{ form.inputerror.lastUpdatedDate\r\n                }}</span>\r\n            </div>\r\n\r\n\r\n            <div class=\"row pt-2 pb-3 justify-content-center\">\r\n              <div class=\"col-md-4\">\r\n                <button *ngIf=\"!form.data.id\" (click)=\"onUpload()\" class=\"btn btn-success\">{{ 'Save' | translate\r\n                  }}</button>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <button *ngIf=\"form.data.id\" (click)=\"onUpload()\" class=\"btn btn-success\">{{ 'Update' | translate\r\n                  }}</button>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <a class=\"btn btn-warning\" type=\"button\" [routerLink]=\"['/inventorylist']\">{{ 'List' | translate\r\n                  }}</a>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/inventory/inventory.component.ts":
/*!**************************************************!*\
  !*** ./src/app/inventory/inventory.component.ts ***!
  \**************************************************/
/*! exports provided: InventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryComponent", function() { return InventoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var InventoryComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](InventoryComponent, _super);
    function InventoryComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.INVENTORY, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.getKey = false;
        _this.selected = null;
        _this.userForm = null;
        return _this;
    }
    InventoryComponent.prototype.submit = function () {
        var _self = this;
        console.log('in submit');
        console.log(this.form);
        console.log(this.form.data);
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {}; // Clear input errors here
            if (res.success) {
                _self.form.error = false; // Set error to false on success
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("----------Rahul----------.");
                // Clear form data if needed
                // _self.form.data = {};
            }
            else {
                _self.form.error = true;
                if (res.result.inputerror) {
                    _self.form.inputerror = res.result.inputerror;
                }
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    InventoryComponent.prototype.submit1 = function () {
        var _self = this;
        console.log(this.form + "submit running start");
        console.log(this.form.data + "form data going to be submit");
        this.serviceLocator.httpService.post(this.api.search, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            _self.form.data.id = res.result.data;
            if (res.success) {
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("--------------------.");
            }
            else {
                _self.form.error = true;
                _self.form.inputerror = res.result.inputerror;
                _self.form.message = res.result.message;
            }
            _self.form.data.id = res.result.data;
            console.log('FORM', _self.form);
        });
    };
    InventoryComponent.prototype.onUpload = function (userform) {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    InventoryComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.productId);
        console.log(form.productId);
        flag = flag && validator.isNotNullObject(form.supplierName);
        console.log(form.supplierName);
        flag = flag && validator.isNotNullObject(form.quantity);
        console.log(form.quantity);
        flag = flag && validator.isNotNullObject(form.lastUpdatedDate);
        console.log(form.lastUpdatedDate);
        return flag;
    };
    InventoryComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        console.log(form.id + 'populate form in shoppingcomponent');
        form.supplierName = data.supplierName;
        form.quantity = data.quantity;
        form.lastUpdatedDate = data.lastUpdatedDate;
        form.productId = data.productId;
    };
    InventoryComponent.prototype.validatePhone = function (event) {
        var input = event.key;
        // Check if the input is a number or backspace
        if ((isNaN(Number(input)) && input !== 'Backspace') || (input === ' ')) {
            event.preventDefault();
        }
        // Limit the input to 10 characters
        if (this.form.data.phone && this.form.data.phone.length >= 10 && input !== 'Backspace') {
            event.preventDefault();
        }
    };
    InventoryComponent.prototype.validateAlphabetInput = function (event) {
        var charCode = event.which || event.keyCode;
        var charStr = String.fromCharCode(charCode);
        // Regular expression to test if the character is a letter
        if (!/^[a-zA-Z]+$/.test(charStr)) {
            event.preventDefault();
        }
    };
    InventoryComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    InventoryComponent.prototype.test = function () {
    };
    InventoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inventory',
            template: __webpack_require__(/*! ./inventory.component.html */ "./src/app/inventory/inventory.component.html"),
            styles: [__webpack_require__(/*! ./inventory.component.css */ "./src/app/inventory/inventory.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], InventoryComponent);
    return InventoryComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/inventory/inventorylist.component.css":
/*!*******************************************************!*\
  !*** ./src/app/inventory/inventorylist.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludmVudG9yeS9pbnZlbnRvcnlsaXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/inventory/inventorylist.component.html":
/*!********************************************************!*\
  !*** ./src/app/inventory/inventorylist.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  #nnn {\r\n    background: none;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .panel-heading {\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .search-inputs {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .search-inputs .form-control,\r\n  .search-inputs .btn {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .content-wrapper {\r\n    background: url(assets/files/wall.jpg) no-repeat center center;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    width: auto;\r\n    height: 105vh;\r\n    padding: 20px;\r\n  }\r\n\r\n  .table-responsive {\r\n    margin-top: 20px;\r\n  }\r\n</style>\r\n\r\n<div class=\"content-wrapper\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\">\r\n        <h1 class=\"text-primary font-weight-bold\">{{ 'Inevntory List' | translate }}</h1>\r\n      </div>\r\n\r\n      <div class=\"row search-inputs justify-content-center\">\r\n        <div class=\"col-md-3\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.supplierName\"\r\n            placeholder=\"{{ 'Search supplier Name' | translate }}\" (input)=\"validateInput($event, 'name')\">\r\n          <div *ngIf=\"!isValidNameInput\" class=\"text-danger\">{{ nameErrorMessage }}</div>\r\n        </div>\r\n        <!--  <div class=\"col-md-3\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.mobile\"\r\n            placeholder=\"{{ 'Search mobile' | translate }}\" (input)=\"validateInput($event, 'mobile')\">\r\n          <div *ngIf=\"!isValidMobileInput\" class=\"text-danger\">{{ mobileErrorMessage }}</div>\r\n        </div> -->\r\n\r\n        <div class=\"col-md-3\">\r\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.searchParams.lastUpdatedDate\"\r\n            (ngModelChange)=\"formatDate($event)\" placeholder=\"{{ 'Search lastUpdatedDate' | translate }}\">\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"form.searchParams.quantity\"\r\n            placeholder=\"{{ 'Search quantity' | translate }}\">\r\n        </div>\r\n\r\n\r\n        <div class=\"col-md-3\">\r\n          <select class=\"form-control\" name=\"productId\" [(ngModel)]=\"form.searchParams.productId\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{ 'Select product' | translate }}</option>\r\n            <option *ngFor=\"let obj of form.preload.productList\" [value]=\"obj.key\">{{ obj.value }}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row mt-2 justify-content-center\">\r\n        <div class=\"col-md-2\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary btn-block\">{{ 'Search' | translate }}</button>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <button (click)=\"forward('/inventory')\" type=\"button\" class=\"btn btn-success btn-block\">{{ 'Add Inventory' |\r\n            translate }}</button>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger btn-block\">{{ 'Delete' | translate }}</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"form.error || form.message\" class=\"row mt-2 justify-content-center\">\r\n        <div class=\"col-md-6\">\r\n          <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{ form.message }}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{ form.message }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-responsive mt-3\">\r\n        <table class=\"table table-bordered table-hover font-weight-bold text-dark\">\r\n          <thead class=\"thead-dark text-uppercase\">\r\n            <tr align=\"center\">\r\n              <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\"\r\n                  (change)=\"checkUncheckAll($event)\" /></th>\r\n              <th>{{ 'S.No' }}</th>\r\n              <th>{{ 'supplier name' }}</th>\r\n              <th>{{ 'quantity' }}</th>\r\n              <th>{{ 'last updated date' }}</th>\r\n              <th>{{ 'product' }}</th>\r\n              <th>{{ 'Edit' }}</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n              <td><input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" [id]=\"m.id\" /></td>\r\n              <td>{{ (form.pageNo * 5) + i + 1 }}</td>\r\n              <td>{{ m.supplierName }}</td>\r\n              <td>{{ m.quantity }}</td>\r\n              <td>{{ convertToLocalDate(m.lastUpdatedDate) }}</td>\r\n              <td>{{ m.productName }}</td>\r\n              <td>\r\n                <button class=\"fa fa-edit text-primary\" id=\"nnn\" (click)=\"forward('/inventory/' + m.id)\"></button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <div class=\"d-flex justify-content-between mt-3\">\r\n        <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{ 'Previous' | translate\r\n          }}</button>\r\n        <div *ngIf=\"form.list.length == 0\">\r\n          <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/inventorylist']\" (click)=\"exit()\">{{ 'Back' |\r\n            translate }}</a>\r\n        </div>\r\n        <button (click)=\"next()\" [disabled]=\"nextList == 0\" class=\"btn btn-info\">{{ 'Next' | translate }}</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/inventory/inventorylist.component.ts":
/*!******************************************************!*\
  !*** ./src/app/inventory/inventorylist.component.ts ***!
  \******************************************************/
/*! exports provided: InventorylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventorylistComponent", function() { return InventorylistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var InventorylistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](InventorylistComponent, _super);
    function InventorylistComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.INVENTORY, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null },
            inputerror: {},
            searchParams: {
                name: '',
                mobile: '',
                date: '',
                dateOfJoining: '',
                experienceId: ''
            },
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        _this.isValidMobileInput = true;
        _this.isValidNameInput = true;
        _this.nameErrorMessage = '';
        _this.mobileErrorMessage = '';
        return _this;
    }
    InventorylistComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    // Format date function
    InventorylistComponent.prototype.formatDate = function (event) {
        var selectedDate = new Date(event);
        var formattedDate = selectedDate.toISOString().split('T')[0];
        this.form.searchParams.date = formattedDate;
    };
    // Convert date to local format for display
    InventorylistComponent.prototype.convertToLocalDate = function (dateString) {
        var date = new Date(dateString);
        // Format date to 'MM/DD/YYYY'
        var options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return date.toLocaleDateString(undefined, options);
    };
    // Validate input for name and mobile fields
    InventorylistComponent.prototype.validateInput = function (event, field) {
        var value = event.target.value;
        if (field === 'mobile') {
            this.isValidMobileInput = /^[0-9]*$/.test(value); // Check if the input contains only numbers
            if (!this.isValidMobileInput) {
                this.mobileErrorMessage = 'Please type numbers only';
            }
            else {
                this.mobileErrorMessage = '';
            }
        }
        else if (field === 'name') {
            this.isValidNameInput = /^[A-Za-z\s]*$/.test(value); // Check if the input contains only letters and spaces
            if (!this.isValidNameInput) {
                this.nameErrorMessage = 'Please type alphabets only';
            }
            else {
                this.nameErrorMessage = '';
            }
        }
    };
    // Submit method
    InventorylistComponent.prototype.submit = function () {
        // Reset page number before searching
        this.form.pageNo = 0;
        // Call the search method after formatting the date
        this.search();
    };
    // Search method
    InventorylistComponent.prototype.search = function () {
        // Clear previous search message
        this.form.searchMessage = null;
        // Perform the search operation with the search parameters
        _super.prototype.search.call(this);
    };
    InventorylistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inventorylist',
            template: __webpack_require__(/*! ./inventorylist.component.html */ "./src/app/inventory/inventorylist.component.html"),
            styles: [__webpack_require__(/*! ./inventorylist.component.css */ "./src/app/inventory/inventorylist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], InventorylistComponent);
    return InventorylistComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/issue/issue.component.css":
/*!*******************************************!*\
  !*** ./src/app/issue/issue.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lzc3VlL2lzc3VlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/issue/issue.component.html":
/*!********************************************!*\
  !*** ./src/app/issue/issue.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n\r\n  .input-group-addon {\r\n    box-shadow: 9px 8px 7px #001a33;\r\n  }\r\n\r\n  .required-field {\r\n    color: red;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .alertRedColor {\r\n    color: red;\r\n  }\r\n\r\n  .card-body {\r\n    padding: 2rem;\r\n  }\r\n\r\n  .input-group-text i {\r\n    width: 1.5rem;\r\n  }\r\n\r\n  .btn-primary,\r\n  .btn-success,\r\n  .btn-warning {\r\n    width: 100%;\r\n  }\r\n\r\n  .form-control {\r\n    height: calc(2.25rem + 2px);\r\n  }\r\n\r\n  .form-group {\r\n    margin-bottom: 1.5rem;\r\n  }\r\n\r\n  .input-group-prepend .input-group-text {\r\n    background-color: #e9ecef;\r\n    border: 1px solid #ced4da;\r\n  }\r\n\r\n  .input-group-prepend .input-group-text i {\r\n    color: #495057;\r\n  }\r\n\r\n  .row {\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n  }\r\n\r\n  .textarea-height {\r\n    height: 100px;\r\n  }\r\n\r\n  .card {\r\n    margin: auto;\r\n    max-width: 500px;\r\n  }\r\n\r\n  .container-fluid {\r\n    padding: 2% 0;\r\n    background: url('assets/files/wall.jpg') no-repeat center center;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    width: 100%;\r\n    height: auto;\r\n  }\r\n</style>\r\n\r\n<div class=\"container-fluid\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body input-group-addon grad\">\r\n          <form name=\"userForm\">\r\n            <h2 *ngIf=\"!form.data.id\" class=\"text-primary font-weight-bold text-center\">{{ 'Add Issue' | translate }}\r\n            </h2>\r\n            <h2 *ngIf=\"form.data.id\" class=\"text-primary font-weight-bold text-center\">{{ 'Update Issue' | translate }}\r\n            </h2>\r\n\r\n            <div *ngIf=\"!form.error && form.message == 'Data is saved'\" class=\"alert alert-success alert-dismissible\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n              {{ form.message }}\r\n            </div>\r\n\r\n            <div *ngIf=\"form.error && form.message\" class=\"alert alert-danger alert-dismissible\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n              {{ form.message }}\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'StatusId' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-flag grey-text\"></i></div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"statusId\" [(ngModel)]=\"form.data.statusId\" aria-label=\"ngSelected\">\r\n                  <option [ngValue]=\"undefined\">{{ 'Select status' | translate }}</option>\r\n                  <option *ngFor=\"let obj of form.preload.statusList\" [value]=\"obj.key\">{{ obj.value }}</option>\r\n                </select>\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.statusId\" class=\"alertRedColor\">{{ form.inputerror.statusId }}</span>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Title' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fas fa-heading\"></i></div>\r\n                </div>\r\n                <input type=\"text\" name=\"title\" [(ngModel)]=\"form.data.title\" class=\"form-control\"\r\n                  placeholder=\"{{ 'Enter title' | translate }}\" (keypress)=\"validateAlphabetInput($event)\">\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.title\" class=\"alertRedColor\">{{ form.inputerror.title }}</span>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Description' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-align-left grey-text\"></i></div>\r\n                </div>\r\n                <textarea name=\"description\" [(ngModel)]=\"form.data.description\" class=\"form-control textarea-height\"\r\n                  placeholder=\"{{ 'Enter description' | translate }}\"></textarea>\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.description\" class=\"alertRedColor\">{{ form.inputerror.description }}</span>\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Assign To' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"assignTo\" id=\"assignTo\" [(ngModel)]=\"form.data.assignTo\"\r\n                  style=\"cursor: pointer;\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{'Please select' | translate }}</option>\r\n                  <option value=\"Males\">{{'Male' | translate }} </option>\r\n                  <option value=\"Female\">{{'Female' | translate }} </option>\r\n                  <option value=\"Others\">{{'Others' | translate }} </option>\r\n                </select>\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.assignTo\" class=\"alertRedColor\">{{ form.inputerror.assignTo }}</span>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Open Date' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></div>\r\n                </div>\r\n                <input type=\"date\" name=\"openDate\" [value]=\"form.data.openDate | date:'yyyy-MM-dd'\"\r\n                  (input)=\"form.data.openDate=parseDate($event.target.value)\" class=\"form-control\" required />\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.openDate\" class=\"alertRedColor\">{{ form.inputerror.openDate }}</span>\r\n            </div>\r\n\r\n            <div class=\"row pt-2 pb-3 justify-content-center\">\r\n              <div class=\"col-md-4\">\r\n                <button *ngIf=\"!form.data.id\" (click)=\"onUpload()\" class=\"btn btn-success\">{{ 'Save' | translate\r\n                  }}</button>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <button *ngIf=\"form.data.id\" (click)=\"onUpload()\" class=\"btn btn-success\">{{ 'Update' | translate\r\n                  }}</button>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <a class=\"btn btn-warning\" type=\"button\" [routerLink]=\"['/issuelist']\">{{ 'List' | translate }}</a>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/issue/issue.component.ts":
/*!******************************************!*\
  !*** ./src/app/issue/issue.component.ts ***!
  \******************************************/
/*! exports provided: IssueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueComponent", function() { return IssueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var IssueComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](IssueComponent, _super);
    function IssueComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.ISSUE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.getKey = false;
        _this.selected = null;
        _this.userForm = null;
        return _this;
    }
    IssueComponent.prototype.submit = function () {
        var _self = this;
        console.log('in submit');
        console.log(this.form);
        console.log(this.form.data);
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {}; // Clear input errors here
            if (res.success) {
                _self.form.error = false; // Set error to false on success
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("----------Rahul----------.");
                // Clear form data if needed
                // _self.form.data = {};
            }
            else {
                _self.form.error = true;
                if (res.result.inputerror) {
                    _self.form.inputerror = res.result.inputerror;
                }
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    IssueComponent.prototype.submit1 = function () {
        var _self = this;
        console.log(this.form + "submit running start");
        console.log(this.form.data + "form data going to be submit");
        this.serviceLocator.httpService.post(this.api.search, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            _self.form.data.id = res.result.data;
            if (res.success) {
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("--------------------.");
            }
            else {
                _self.form.error = true;
                _self.form.inputerror = res.result.inputerror;
                _self.form.message = res.result.message;
            }
            _self.form.data.id = res.result.data;
            console.log('FORM', _self.form);
        });
    };
    IssueComponent.prototype.onUpload = function (userform) {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    IssueComponent.prototype.validatePaymentTerm = function () {
        var paymentTerm = this.form.data.paymentTerm;
        var paymentTermPattern = /^[a-zA-Z ]*$/; // Only allows alphabetic characters and spaces
        if (!paymentTermPattern.test(paymentTerm)) {
            this.form.inputerror.paymentTerm = 'Invalid payment term';
        }
        else {
            delete this.form.inputerror.paymentTerm;
        }
    };
    IssueComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.statusId);
        console.log(form.statusId);
        flag = flag && validator.isNotNullObject(form.title);
        console.log(form.title);
        flag = flag && validator.isNotNullObject(form.assignTo);
        console.log(form.assignTo);
        flag = flag && validator.isNotNullObject(form.openDate);
        console.log(form.openDate);
        flag = flag && validator.isNotNullObject(form.description);
        console.log(form.description);
        return flag;
    };
    IssueComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        console.log(form.id + 'populate form in shoppingcomponent');
        form.title = data.title;
        form.description = data.description;
        form.openDate = data.openDate;
        form.statusId = data.statusId;
        form.assignTo = data.assignTo;
    };
    IssueComponent.prototype.validatePhone = function (event) {
        var input = event.key;
        // Check if the input is a number or backspace
        if ((isNaN(Number(input)) && input !== 'Backspace') || (input === ' ')) {
            event.preventDefault();
        }
        // Limit the input to 10 characters
        if (this.form.data.phone && this.form.data.phone.length >= 10 && input !== 'Backspace') {
            event.preventDefault();
        }
    };
    IssueComponent.prototype.validateAlphabetInput = function (event) {
        var charCode = event.which || event.keyCode;
        var charStr = String.fromCharCode(charCode);
        // Regular expression to test if the character is a letter
        var letterRegex = /^[a-zA-Z\s]+$/;
        // Test if the input matches the allowed characters
        if (!letterRegex.test(charStr)) {
            event.preventDefault();
        }
        // Optionally, check the entire value against the name format regex
        var inputElement = event.target;
        var inputValue = inputElement.value + charStr; // Add the current character to the input value
        // Regex for valid name format "FirstName LastName"
        var nameRegex = /^[A-Z][a-z]+ [A-Z][a-z]+$/;
        // Check if the current value matches the valid name format
        if (!nameRegex.test(inputValue)) {
            // Handle invalid input (e.g., disable submit button, show error message)
            // Example:
            inputElement.classList.add('invalid'); // Apply CSS class for invalid input
        }
        else {
            inputElement.classList.remove('invalid'); // Remove invalid CSS class if format is valid
        }
    };
    IssueComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    IssueComponent.prototype.test = function () {
    };
    IssueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-issue',
            template: __webpack_require__(/*! ./issue.component.html */ "./src/app/issue/issue.component.html"),
            styles: [__webpack_require__(/*! ./issue.component.css */ "./src/app/issue/issue.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], IssueComponent);
    return IssueComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/issue/issuelist.component.css":
/*!***********************************************!*\
  !*** ./src/app/issue/issuelist.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lzc3VlL2lzc3VlbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/issue/issuelist.component.html":
/*!************************************************!*\
  !*** ./src/app/issue/issuelist.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  #nnn {\r\n    background: none;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .panel-heading {\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .search-inputs {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .search-inputs .form-control,\r\n  .search-inputs .btn {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .content-wrapper {\r\n    background: url(assets/files/wall.jpg) no-repeat center center;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    width: 100%;\r\n    min-height: 100vh;\r\n    padding: 20px;\r\n  }\r\n\r\n  .table-responsive {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .btn-block {\r\n    display: block;\r\n    width: 100%;\r\n  }\r\n\r\n  .alert-dismissible .close {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    padding: 1.25rem 1.5rem;\r\n    color: inherit;\r\n  }\r\n</style>\r\n\r\n<div class=\"content-wrapper\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\">\r\n        <h1 class=\"text-primary font-weight-bold\">{{ 'Issue List' | translate }}</h1>\r\n      </div>\r\n\r\n      <div class=\"row search-inputs justify-content-center\">\r\n        <div class=\"col-md-3\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.title\"\r\n            placeholder=\"{{ 'Search title' | translate }}\" (input)=\"validateInput($event, 'title')\">\r\n          <div *ngIf=\"!isValidNameInput\" class=\"text-danger\">{{ nameErrorMessage }}</div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.description\"\r\n            placeholder=\"{{ 'Search description' | translate }}\">\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <select class=\"form-control\" name=\"assignTo\" id=\"assignTo\" [(ngModel)]=\"form.searchParams.assignTo\"\r\n            style=\"cursor: pointer;\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{'Please select' | translate }}</option>\r\n            <option value=\"Male\">{{'Male' | translate }} </option>\r\n            <option value=\"Female\">{{'Female' | translate }} </option>\r\n            <option value=\"Others\">{{'Others' | translate }} </option>\r\n          </select>\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.searchParams.openDate\"\r\n            (ngModelChange)=\"formatDate($event)\" placeholder=\"{{ 'Search openDate' | translate }}\">\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <select class=\"form-control\" name=\"statusId\" [(ngModel)]=\"form.searchParams.statusId\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{ 'Select statusId' | translate }}</option>\r\n            <option *ngFor=\"let obj of form.preload.statusList\" [value]=\"obj.key\">{{ obj.value }}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row mt-2 justify-content-center\">\r\n        <div class=\"col-md-2\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary btn-block\">{{ 'Search' | translate }}</button>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <button (click)=\"forward('/issue')\" type=\"button\" class=\"btn btn-success btn-block\">{{ 'Add Issue' |\r\n            translate }}</button>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger btn-block\">{{ 'Delete' | translate }}</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"form.error || form.message\" class=\"row mt-2 justify-content-center\">\r\n        <div class=\"col-md-6\">\r\n          <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{ form.message }}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{ form.message }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-responsive mt-3\">\r\n        <table class=\"table table-bordered table-hover font-weight-bold text-dark\">\r\n          <thead class=\"thead-dark text-uppercase\">\r\n            <tr align=\"center\">\r\n              <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\"\r\n                  (change)=\"checkUncheckAll($event)\" /></th>\r\n              <th>{{ 'S.No' }}</th>\r\n              <th>{{ 'title' }}</th>\r\n              <th>{{ 'description' }}</th>\r\n              <th>{{ 'open date' }}</th>\r\n              <th>{{ 'status' }}</th>\r\n              <th>{{ 'assign to' }}</th>\r\n              <th>{{ 'Edit' }}</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n              <td><input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" [id]=\"m.id\" /></td>\r\n              <td>{{ (form.pageNo * 5) + i + 1 }}</td>\r\n              <td>{{ m.title }}</td>\r\n              <td>{{ m.description }}</td>\r\n              <td>{{ convertToLocalDate(m.openDate) }}</td>\r\n              <td>{{ m.statusName }}</td>\r\n              <td>{{ m.assignTo }}</td>\r\n              <td>\r\n                <button class=\"fa fa-edit text-primary\" id=\"nnn\" (click)=\"forward('/issue/' + m.id)\"></button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <div class=\"d-flex justify-content-between mt-3\">\r\n        <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{ 'Previous' | translate\r\n          }}</button>\r\n        <div *ngIf=\"form.list.length == 0\">\r\n          <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/issuelist']\" (click)=\"exit()\">{{ 'Back' |\r\n            translate }}</a>\r\n        </div>\r\n        <button (click)=\"next()\" [disabled]=\"nextList == 0\" class=\"btn btn-info\">{{ 'Next' | translate }}</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/issue/issuelist.component.ts":
/*!**********************************************!*\
  !*** ./src/app/issue/issuelist.component.ts ***!
  \**********************************************/
/*! exports provided: IssuelistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssuelistComponent", function() { return IssuelistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var IssuelistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](IssuelistComponent, _super);
    function IssuelistComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.ISSUE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null },
            inputerror: {},
            searchParams: {
                title: '',
                description: '',
                date: '',
                openDate: '',
                statusId: '',
                assignTo: ''
            },
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        _this.isValidMobileInput = true;
        _this.isValidNameInput = true;
        _this.isValidAllowedSpeed = true;
        _this.nameErrorMessage = '';
        _this.mobileErrorMessage = '';
        _this.allowedSpeedErrorMessage = '';
        return _this;
    }
    IssuelistComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    // Format date function
    IssuelistComponent.prototype.formatDate = function (event) {
        var selectedDate = new Date(event);
        var formattedDate = selectedDate.toISOString().split('T')[0];
        this.form.searchParams.date = formattedDate;
    };
    // Convert date to local format for display
    IssuelistComponent.prototype.convertToLocalDate = function (dateString) {
        var date = new Date(dateString);
        var options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return date.toLocaleDateString(undefined, options);
    };
    // Validate input for name, mobile, and allowedSpeed fields
    IssuelistComponent.prototype.validateInput = function (event, field) {
        var value = event.target.value;
        if (field === 'mobile') {
            this.isValidMobileInput = /^[0-9]*$/.test(value); // Check if the input contains only numbers
            if (!this.isValidMobileInput) {
                this.mobileErrorMessage = 'Please type numbers only';
            }
            else {
                this.mobileErrorMessage = '';
            }
        }
        else if (field === 'name') {
            this.isValidNameInput = /^[A-Za-z\s]*$/.test(value); // Check if the input contains only letters and spaces
            if (!this.isValidNameInput) {
                this.nameErrorMessage = 'Please type alphabets only';
            }
            else {
                this.nameErrorMessage = '';
            }
        }
        else if (field === 'allowedSpeed') {
            if (value === '') {
                this.isValidAllowedSpeed = true; // Treat empty input as valid
                this.allowedSpeedErrorMessage = '';
            }
            else {
                var speed = parseInt(value, 10);
                this.isValidAllowedSpeed = speed >= 70 && speed <= 150; // Check if the input is between 70 and 150
                if (!this.isValidAllowedSpeed) {
                    this.allowedSpeedErrorMessage = 'Please type a valid allowed speed (70-150)';
                }
                else {
                    this.allowedSpeedErrorMessage = '';
                }
            }
        }
    };
    // Submit method
    IssuelistComponent.prototype.submit = function () {
        // Reset page number before searching
        this.form.pageNo = 0;
        // Call the search method after formatting the date
        this.search();
    };
    // Search method
    IssuelistComponent.prototype.search = function () {
        // Clear previous search message
        this.form.searchMessage = null;
        // Perform the search operation with the search parameters
        _super.prototype.search.call(this);
    };
    IssuelistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-issuelist',
            template: __webpack_require__(/*! ./issuelist.component.html */ "./src/app/issue/issuelist.component.html"),
            styles: [__webpack_require__(/*! ./issuelist.component.css */ "./src/app/issue/issuelist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], IssuelistComponent);
    return IssuelistComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/job/job.component.css":
/*!***************************************!*\
  !*** ./src/app/job/job.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvYi9qb2IuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/job/job.component.html":
/*!****************************************!*\
  !*** ./src/app/job/job.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n\r\n  .input-group-addon {\r\n    box-shadow: 9px 8px 7px #001a33;\r\n  }\r\n\r\n  .required-field {\r\n    color: red;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .alertRedColor {\r\n    color: red;\r\n  }\r\n\r\n  .card-body {\r\n    padding: 2rem;\r\n  }\r\n\r\n  .input-group-text i {\r\n    width: 1.5rem;\r\n  }\r\n\r\n  .btn-primary,\r\n  .btn-success,\r\n  .btn-warning {\r\n    width: 100%;\r\n  }\r\n\r\n  .form-control {\r\n    height: calc(2.25rem + 2px);\r\n  }\r\n\r\n  .form-group {\r\n    margin-bottom: 1.5rem;\r\n  }\r\n\r\n  .input-group-prepend .input-group-text {\r\n    background-color: #e9ecef;\r\n    border: 1px solid #ced4da;\r\n  }\r\n\r\n  .input-group-prepend .input-group-text i {\r\n    color: #495057;\r\n  }\r\n\r\n  .row {\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n  }\r\n\r\n  .textarea-height {\r\n    height: 100px;\r\n  }\r\n\r\n  .card {\r\n    margin: auto;\r\n    max-width: 500px;\r\n  }\r\n</style>\r\n\r\n<div class=\"container-fluid\" style=\"padding: 2% 0; background: url('assets/files/wall.jpg') no-repeat center center; background-attachment: fixed; background-size: cover; width: 100%; height: auto;\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body input-group-addon grad\">\r\n          <form name=\"userForm\">\r\n            <h2 *ngIf=\"!form.data.id\" class=\"text-primary font-weight-bold text-center\">{{ 'Add Job' | translate }}</h2>\r\n            <h2 *ngIf=\"form.data.id\" class=\"text-primary font-weight-bold text-center\">{{ 'Update Job' | translate }}</h2>\r\n\r\n            <div *ngIf=\"!form.error && form.message == 'Data is saved'\" class=\"alert alert-success alert-dismissible\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n              {{ form.message }}\r\n            </div>\r\n\r\n            <div *ngIf=\"form.error && form.message\" class=\"alert alert-danger alert-dismissible\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n              {{ form.message }}\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Status' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fas fa-flag\"></i></div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"statusId\" [(ngModel)]=\"form.data.statusId\" aria-label=\"ngSelected\">\r\n                  <option [ngValue]=\"undefined\">{{ 'Select status' | translate }}</option>\r\n                  <option *ngFor=\"let obj of form.preload.statusList\" [value]=\"obj.key\">{{ obj.value }}</option>\r\n                </select>\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.categoryId\" class=\"alertRedColor\">{{ form.inputerror.categoryId }}</span>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Title' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fas fa-user\"></i></div>\r\n                </div>\r\n                <input type=\"text\" name=\"title\" [(ngModel)]=\"form.data.title\" class=\"form-control\" placeholder=\"{{ 'Enter title' | translate }}\" (keypress)=\"validateAlphabetInput($event)\">\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.title\" class=\"alertRedColor\">{{ form.inputerror.title }}</span>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Experience(In years)' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fas fa-money-bill-wave\"></i></div>\r\n                </div>\r\n                <input type=\"number\" name=\"experience\" [(ngModel)]=\"form.data.experience\" class=\"form-control\" placeholder=\"{{ 'Enter experience' | translate }}\">\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.experience\" class=\"alertRedColor\">{{ form.inputerror.experience }}</span>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Date Of Opening' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></div>\r\n                </div>\r\n                <input type=\"date\" name=\"dateOfOpening\" [value]=\"form.data.dateOfOpening | date:'yyyy-MM-dd'\" (input)=\"form.data.dateOfOpening=parseDate($event.target.value)\" class=\"form-control\" required />\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.dateOfOpening\" class=\"alertRedColor\">{{ form.inputerror.dateOfOpening }}</span>\r\n            </div>\r\n\r\n            <div class=\"row pt-2 pb-3 justify-content-center\">\r\n              <div class=\"col-md-4\">\r\n                <button *ngIf=\"!form.data.id\" (click)=\"onUpload()\" class=\"btn btn-success\">{{ 'Save' | translate }}</button>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <button *ngIf=\"form.data.id\" (click)=\"onUpload()\" class=\"btn btn-success\">{{ 'Update' | translate }}</button>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <a class=\"btn btn-warning\" type=\"button\" [routerLink]=\"['/joblist']\">{{ 'List' | translate }}</a>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/job/job.component.ts":
/*!**************************************!*\
  !*** ./src/app/job/job.component.ts ***!
  \**************************************/
/*! exports provided: JobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobComponent", function() { return JobComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var JobComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](JobComponent, _super);
    function JobComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.JOB, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.getKey = false;
        _this.selected = null;
        _this.userForm = null;
        return _this;
    }
    JobComponent.prototype.submit = function () {
        var _self = this;
        console.log('in submit');
        console.log(this.form);
        console.log(this.form.data);
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {}; // Clear input errors here
            if (res.success) {
                _self.form.error = false; // Set error to false on success
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("----------Rahul----------.");
                // Clear form data if needed
                // _self.form.data = {};
            }
            else {
                _self.form.error = true;
                if (res.result.inputerror) {
                    _self.form.inputerror = res.result.inputerror;
                }
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    JobComponent.prototype.submit1 = function () {
        var _self = this;
        console.log(this.form + "submit running start");
        console.log(this.form.data + "form data going to be submit");
        this.serviceLocator.httpService.post(this.api.search, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            _self.form.data.id = res.result.data;
            if (res.success) {
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("--------------------.");
            }
            else {
                _self.form.error = true;
                _self.form.inputerror = res.result.inputerror;
                _self.form.message = res.result.message;
            }
            _self.form.data.id = res.result.data;
            console.log('FORM', _self.form);
        });
    };
    JobComponent.prototype.onUpload = function (userform) {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    JobComponent.prototype.validatePaymentTerm = function () {
        var paymentTerm = this.form.data.paymentTerm;
        var paymentTermPattern = /^[a-zA-Z ]*$/; // Only allows alphabetic characters and spaces
        if (!paymentTermPattern.test(paymentTerm)) {
            this.form.inputerror.paymentTerm = 'Invalid payment term';
        }
        else {
            delete this.form.inputerror.paymentTerm;
        }
    };
    JobComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.statusId);
        console.log(form.statusId);
        flag = flag && validator.isNotNullObject(form.title);
        console.log(form.title);
        flag = flag && validator.isNotNullObject(form.experience);
        console.log(form.experience);
        flag = flag && validator.isNotNullObject(form.dateOfOpening);
        console.log(form.dateOfOpening);
        return flag;
    };
    JobComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        console.log(form.id + 'populate form in shoppingcomponent');
        form.title = data.title;
        form.experience = data.experience;
        form.dateOfOpening = data.dateOfOpening;
        form.statusId = data.statusId;
    };
    JobComponent.prototype.validatePhone = function (event) {
        var input = event.key;
        // Check if the input is a number or backspace
        if ((isNaN(Number(input)) && input !== 'Backspace') || (input === ' ')) {
            event.preventDefault();
        }
        // Limit the input to 10 characters
        if (this.form.data.phone && this.form.data.phone.length >= 10 && input !== 'Backspace') {
            event.preventDefault();
        }
    };
    JobComponent.prototype.validateAlphabetInput = function (event) {
        var charCode = event.which || event.keyCode;
        var charStr = String.fromCharCode(charCode);
        // Regular expression to test if the character is a letter
        var letterRegex = /^[a-zA-Z\s]+$/;
        // Test if the input matches the allowed characters
        if (!letterRegex.test(charStr)) {
            event.preventDefault();
        }
        // Optionally, check the entire value against the name format regex
        var inputElement = event.target;
        var inputValue = inputElement.value + charStr; // Add the current character to the input value
        // Regex for valid name format "FirstName LastName"
        var nameRegex = /^[A-Z][a-z]+ [A-Z][a-z]+$/;
        // Check if the current value matches the valid name format
        if (!nameRegex.test(inputValue)) {
            // Handle invalid input (e.g., disable submit button, show error message)
            // Example:
            inputElement.classList.add('invalid'); // Apply CSS class for invalid input
        }
        else {
            inputElement.classList.remove('invalid'); // Remove invalid CSS class if format is valid
        }
    };
    JobComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    JobComponent.prototype.test = function () {
    };
    JobComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-job',
            template: __webpack_require__(/*! ./job.component.html */ "./src/app/job/job.component.html"),
            styles: [__webpack_require__(/*! ./job.component.css */ "./src/app/job/job.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], JobComponent);
    return JobComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/job/joblist.component.css":
/*!*******************************************!*\
  !*** ./src/app/job/joblist.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvYi9qb2JsaXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/job/joblist.component.html":
/*!********************************************!*\
  !*** ./src/app/job/joblist.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  /* Adjustments for panel heading and main content wrapper */\r\n  .panel-heading {\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-bottom: 20px;\r\n    /* Added margin bottom for spacing */\r\n  }\r\n\r\n  .content-wrapper {\r\n    background: url(assets/files/wall.jpg) no-repeat center center;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    padding: 20px;\r\n    min-height: calc(100vh - 20px);\r\n    /* Adjusted to ensure full height minus padding */\r\n    box-sizing: border-box;\r\n    /* Ensures padding is included in height calculation */\r\n  }\r\n\r\n  .search-inputs {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    /* Added margin bottom for spacing */\r\n  }\r\n\r\n  .search-inputs .form-control,\r\n  .search-inputs .btn {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .table-responsive {\r\n    margin-top: 20px;\r\n    overflow-x: auto;\r\n    /* Ensures horizontal scroll if table overflows */\r\n  }\r\n</style>\r\n\r\n<div class=\"content-wrapper\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\">\r\n        <h1 class=\"text-primary font-weight-bold\">{{ 'Job List' | translate }}</h1>\r\n      </div>\r\n\r\n      <div class=\"row search-inputs justify-content-center\">\r\n        <div class=\"col-md-3 mb-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.title\"\r\n            placeholder=\"{{ 'Search title' | translate }}\" (input)=\"validateInput($event, 'title')\">\r\n          <!-- Display validation message for title -->\r\n          <div *ngIf=\"!isValidTitleInput\" class=\"text-danger\">{{ titleErrorMessage }}</div>\r\n        </div>\r\n        <div class=\"col-md-3 mb-2\">\r\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.searchParams.dateOfOpening\"\r\n            (ngModelChange)=\"formatDate($event)\" placeholder=\"{{ 'Search dateOfOpening' | translate }}\">\r\n        </div>\r\n\r\n        <div class=\"col-md-3 mb-2\">\r\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"form.searchParams.experience\"\r\n            placeholder=\"{{ 'Search experience' | translate }}\">\r\n        </div>\r\n\r\n        <div class=\"col-md-3 mb-2\">\r\n          <select class=\"form-control\" name=\"statusId\" [(ngModel)]=\"form.searchParams.statusId\">\r\n            <option [ngValue]=\"undefined\">{{ 'Select status' | translate }}</option>\r\n            <option *ngFor=\"let obj of form.preload.statusList\" [value]=\"obj.key\">{{ obj.value }}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row mt-2 justify-content-center\">\r\n        <div class=\"col-md-2 mb-2\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary btn-block\">{{ 'Search' | translate }}</button>\r\n        </div>\r\n        <div class=\"col-md-2 mb-2\">\r\n          <button (click)=\"forward('/job')\" type=\"button\" class=\"btn btn-success btn-block\">{{ 'Add Job' | translate\r\n            }}</button>\r\n        </div>\r\n        <div class=\"col-md-2 mb-2\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger btn-block\">{{ 'Delete' | translate }}</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row mt-2 justify-content-center\">\r\n        <div class=\"col-md-6\">\r\n          <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{ form.message }}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{ form.message }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-responsive mt-3\">\r\n        <table class=\"table table-bordered table-hover font-weight-bold text-dark\">\r\n          <thead class=\"thead-dark text-uppercase\">\r\n            <tr align=\"center\">\r\n              <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\"\r\n                  (change)=\"checkUncheckAll($event)\" /></th>\r\n              <th>{{ 'S.No' }}</th>\r\n              <th>{{ 'Title' }}</th>\r\n              <th>{{ 'Experience' }}</th>\r\n              <th>{{ 'Date Of Opening' }}</th>\r\n              <th>{{ 'Status' }}</th>\r\n              <th>{{ 'Edit' }}</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n              <td><input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" [id]=\"m.id\" /></td>\r\n              <td>{{ (form.pageNo * 5) + i + 1 }}</td>\r\n              <td>{{ m.title }}</td>\r\n              <td>{{ m.experience }}</td>\r\n              <td>{{ convertToLocalDate(m.dateOfOpening) }}</td>\r\n              <td>{{ m.statusName }}</td>\r\n              <td><button class=\"fa fa-edit text-primary\" id=\"nnn\" (click)=\"forward('/job/' + m.id)\"></button></td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <div class=\"d-flex justify-content-between mt-3\">\r\n        <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{ 'Previous' | translate\r\n          }}</button>\r\n        <div *ngIf=\"form.list.length == 0\">\r\n          <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/joblist']\" (click)=\"exit()\">{{ 'Back' | translate }}</a>\r\n        </div>\r\n        <button (click)=\"next()\" [disabled]=\"nextList == 0\" class=\"btn btn-info\">{{ 'Next' | translate }}</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/job/joblist.component.ts":
/*!******************************************!*\
  !*** ./src/app/job/joblist.component.ts ***!
  \******************************************/
/*! exports provided: JoblistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoblistComponent", function() { return JoblistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var JoblistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](JoblistComponent, _super);
    function JoblistComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.JOB, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null },
            inputerror: {},
            searchParams: {
                title: '',
                experience: '',
                dateOfOpening: '',
                statusId: '',
                date: ''
            },
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        _this.isValidMobileInput = true;
        _this.isValidNameInput = true;
        _this.nameErrorMessage = '';
        _this.mobileErrorMessage = '';
        _this.isValidTitleInput = true;
        _this.titleErrorMessage = '';
        return _this;
    }
    JoblistComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    // Format date function
    JoblistComponent.prototype.formatDate = function (event) {
        var selectedDate = new Date(event);
        var formattedDate = selectedDate.toISOString().split('T')[0]; // Ensure it's in ISO format
        this.form.searchParams.date = formattedDate;
    };
    // Convert date to local format for display
    JoblistComponent.prototype.convertToLocalDate = function (dateString) {
        var date = new Date(dateString);
        // Format date to 'MM/DD/YYYY'
        var options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return date.toLocaleDateString(undefined, options);
    };
    // Validate input for name and mobile fields
    JoblistComponent.prototype.validateInput = function (event, field) {
        var value = event.target.value;
        if (field === 'mobile') {
            this.isValidMobileInput = /^[0-9]*$/.test(value); // Check if the input contains only numbers
            if (!this.isValidMobileInput) {
                this.mobileErrorMessage = 'Please type numbers only';
            }
            else {
                this.mobileErrorMessage = '';
            }
        }
        else if (field === 'name') {
            this.isValidNameInput = /^[A-Za-z\s]*$/.test(value); // Check if the input contains only letters and spaces
            if (!this.isValidNameInput) {
                this.nameErrorMessage = 'Please type alphabets only';
            }
            else {
                this.nameErrorMessage = '';
            }
        }
        else if (field === 'title') {
            this.isValidTitleInput = /^([A-Z][a-z]+(\s[A-Z][a-z]+)*){1,100}$/.test(value); // Check against the specified regex
            if (!this.isValidTitleInput) {
                this.titleErrorMessage = 'Please enter a valid title';
            }
            else {
                this.titleErrorMessage = '';
            }
        }
    };
    // Submit method
    JoblistComponent.prototype.submit = function () {
        // Reset page number before searching
        this.form.pageNo = 0;
        // Call the search method after formatting the date
        this.search();
    };
    // Search method
    JoblistComponent.prototype.search = function () {
        // Clear previous search message
        this.form.searchMessage = null;
        // Perform the search operation with the search parameters
        _super.prototype.search.call(this);
    };
    JoblistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-joblist',
            template: __webpack_require__(/*! ./joblist.component.html */ "./src/app/job/joblist.component.html"),
            styles: [__webpack_require__(/*! ./joblist.component.css */ "./src/app/job/joblist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], JoblistComponent);
    return JoblistComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/loader/loader.component.css":
/*!*********************************************!*\
  !*** ./src/app/loader/loader.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/loader/loader.component.html":
/*!**********************************************!*\
  !*** ./src/app/loader/loader.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div id=\"loader\">\r\n      <div class=\"dot\"></div>\r\n      <div class=\"dot\"></div>\r\n      <div class=\"dot\"></div>\r\n      <div class=\"dot\"></div>\r\n      <div class=\"dot\"></div>\r\n      <div class=\"dot\"></div>\r\n      <div class=\"dot\"></div>\r\n      <div class=\"dot\"></div>\r\n      <div class=\"loading\"></div>\r\n    </div>\r\n\r\n    <p class=\"spinner-message\" *ngIf=\"message && message !== ''\">\r\n      {{message}}\r\n    </p>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/loader/loader.component.ts":
/*!********************************************!*\
  !*** ./src/app/loader/loader.component.ts ***!
  \********************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.css */ "./src/app/loader/loader.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/loans/loans.component.css":
/*!*******************************************!*\
  !*** ./src/app/loans/loans.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvYW5zL2xvYW5zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/loans/loans.component.html":
/*!********************************************!*\
  !*** ./src/app/loans/loans.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n\r\n  .input-group-addon {\r\n    box-shadow: 9px 8px 7px #001a33;\r\n  }\r\n\r\n  .required-field {\r\n    color: red;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .alertRedColor {\r\n    color: red;\r\n  }\r\n\r\n  .card-body {\r\n    padding: 2rem;\r\n  }\r\n\r\n  .input-group-text i {\r\n    width: 1.5rem;\r\n  }\r\n\r\n  .btn-primary,\r\n  .btn-success,\r\n  .btn-warning {\r\n    width: 100%;\r\n  }\r\n\r\n  .form-control {\r\n    height: calc(2.25rem + 2px);\r\n  }\r\n\r\n  .form-group {\r\n    margin-bottom: 1.5rem;\r\n  }\r\n\r\n  .input-group-prepend .input-group-text {\r\n    background-color: #e9ecef;\r\n    border: 1px solid #ced4da;\r\n  }\r\n\r\n  .input-group-prepend .input-group-text i {\r\n    color: #495057;\r\n  }\r\n\r\n  .row {\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n  }\r\n\r\n  .textarea-height {\r\n    height: 100px;\r\n  }\r\n\r\n  .card {\r\n    margin: auto;\r\n    max-width: 500px;\r\n  }\r\n</style>\r\n\r\n<div class=\"container-fluid\"\r\n  style=\"padding: 2% 0; background: url('assets/files/wall.jpg') no-repeat center center; background-attachment: fixed; background-size: cover; width: 100%; height: auto;\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body input-group-addon grad\">\r\n          <form name=\"userForm\">\r\n            <h2 *ngIf=\"!form.data.id\" class=\"text-primary font-weight-bold text-center\">{{ 'Add Loans' |\r\n              translate }}\r\n            </h2>\r\n            <h2 *ngIf=\"form.data.id\" class=\"text-primary font-weight-bold text-center\">{{ 'Update Loans' |\r\n              translate }}\r\n            </h2>\r\n\r\n            <div *ngIf=\"!form.error && form.message\" class=\"alert alert-success alert-dismissible\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n              {{ form.message }}\r\n            </div>\r\n\r\n            <div *ngIf=\"form.error && form.message\" class=\"alert alert-danger alert-dismissible\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n              {{ form.message }}\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'CustomerId' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-flag grey-text\"></i></div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"customerIdId\" [(ngModel)]=\"form.data.customerIdId\"\r\n                  aria-label=\"ngSelected\">\r\n                  <option [ngValue]=\"undefined\">{{ 'Select customerId' | translate }}</option>\r\n                  <option *ngFor=\"let obj of form.preload.customerIdList\" [value]=\"obj.key\">{{ obj.key }}</option>\r\n                </select>\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.customerIdId\" class=\"alertRedColor\">{{form.inputerror.customerIdId}}</span>\r\n            </div>\r\n\r\n            <form [formGroup]=\"userForm\">\r\n              <div class=\"form-group\">\r\n                <label for=\"loanAmount\">Loan Amount</label>\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <div class=\"input-group-text\"><i class=\"fa fa-flag grey-text\"></i></div>\r\n                  </div>\r\n                <input type=\"number\" class=\"form-control\" id=\"loanAmount\" formControlName=\"loanAmount\">\r\n                <div *ngIf=\"userForm.get('loanAmount').invalid && (userForm.get('loanAmount').dirty || userForm.get('loanAmount').touched)\">\r\n                  <div *ngIf=\"userForm.get('loanAmount').errors?.invalidRange\" class=\"text-danger\">Loan amount must be between 50,000 and 1,000,000.</div>\r\n                </div>\r\n                <span *ngIf=\"form.inputerror.loanAmount\" class=\"alertRedColor\">{{form.inputerror.loanAmount}}</span>\r\n              </div>\r\n            \r\n              <!--<button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"userForm.invalid\">Submit</button> -->\r\n        \r\n\r\n            \r\n            \r\n            \r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Interest Rate' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i></div>\r\n                </div>\r\n                <input type=\"number\" name=\"interestRate\" [(ngModel)]=\"form.data.interestRate\" class=\"form-control\"\r\n                  placeholder=\"{{ 'Enter interestRate' | translate }}\">\r\n\r\n\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.interestRate\" class=\"alertRedColor\">{{ form.inputerror.interestRate}}</span>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Loan Start Date' | translate }}</b><span class=\"required-field\"></span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-calendar-alt grey-text\"></i></div>\r\n                </div>\r\n                <input type=\"date\" name=\"loanStartDate\" [value]=\"form.data.loanStartDate | date:'yyyy-MM-dd'\"\r\n                  (input)=\"form.data.loanStartDate=parseDate($event.target.value)\" class=\"form-control\" required />\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.loanStartDate\" class=\"alertRedColor\">{{ form.inputerror.loanStartDate\r\n                }}</span>\r\n            </div>\r\n\r\n\r\n            <div class=\"row pt-2 pb-3 justify-content-center\">\r\n              <div class=\"col-md-4\">\r\n                <button *ngIf=\"!form.data.id\" (click)=\"onUpload()\" class=\"btn btn-success\">{{ 'Save' | translate\r\n                  }}</button>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <button *ngIf=\"form.data.id\" (click)=\"onUpload()\" class=\"btn btn-success\">{{ 'Update' | translate\r\n                  }}</button>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <a class=\"btn btn-warning\" type=\"button\" [routerLink]=\"['/loanslist']\">{{ 'List' | translate\r\n                  }}</a>\r\n              </div>\r\n            </div>\r\n  \r\n      </div>\r\n</form>\r\n</form>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/loans/loans.component.ts":
/*!******************************************!*\
  !*** ./src/app/loans/loans.component.ts ***!
  \******************************************/
/*! exports provided: LoansComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoansComponent", function() { return LoansComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







var LoansComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LoansComponent, _super);
    function LoansComponent(locator, formBuilder, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.LOANS, locator, route) || this;
        _this.locator = locator;
        _this.formBuilder = formBuilder;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.getKey = false;
        _this.selected = null;
        _this.userForm = null;
        _this.userForm = _this.formBuilder.group({
            loanAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _this.validateLoanAmountRange()]]
        });
        return _this;
    }
    LoansComponent.prototype.submit = function () {
        var _self = this;
        console.log('in submit');
        console.log(this.form);
        console.log(this.form.data);
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {}; // Clear input errors here
            if (res.success) {
                _self.form.error = false; // Set error to false on success
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("----------Rahul----------.");
                // Clear form data if needed
                // _self.form.data = {};
            }
            else {
                _self.form.error = true;
                if (res.result.inputerror) {
                    _self.form.inputerror = res.result.inputerror;
                }
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    LoansComponent.prototype.submit1 = function () {
        var _self = this;
        console.log(this.form + "submit running start");
        console.log(this.form.data + "form data going to be submit");
        this.serviceLocator.httpService.post(this.api.search, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            _self.form.data.id = res.result.data;
            if (res.success) {
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("--------------------.");
            }
            else {
                _self.form.error = true;
                _self.form.inputerror = res.result.inputerror;
                _self.form.message = res.result.message;
            }
            _self.form.data.id = res.result.data;
            console.log('FORM', _self.form);
        });
    };
    LoansComponent.prototype.onUpload = function (userform) {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    LoansComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.customerIdId);
        console.log(form.customerIdId);
        flag = flag && validator.isNotNullObject(form.loanAmount);
        console.log(form.loanAmount);
        flag = flag && validator.isNotNullObject(form.interestRate);
        console.log(form.interestRate);
        flag = flag && validator.isNotNullObject(form.loanStartDate);
        console.log(form.loanStartDate);
        return flag;
    };
    LoansComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        console.log(form.id + 'populate form in shoppingcomponent');
        form.loanAmount = data.loanAmount;
        form.interestRate = data.interestRate;
        form.loanStartDate = data.loanStartDate;
        form.customerIdId = data.customerIdId;
    };
    LoansComponent.prototype.validatePhone = function (event) {
        var input = event.key;
        // Check if the input is a number or backspace
        if ((isNaN(Number(input)) && input !== 'Backspace') || (input === ' ')) {
            event.preventDefault();
        }
        // Limit the input to 10 characters
        if (this.form.data.phone && this.form.data.phone.length >= 10 && input !== 'Backspace') {
            event.preventDefault();
        }
    };
    LoansComponent.prototype.validateAlphabetInput = function (event) {
        var charCode = event.which || event.keyCode;
        var charStr = String.fromCharCode(charCode);
        // Regular expression to test if the character is a letter
        var letterRegex = /^[a-zA-Z\s]+$/;
        // Test if the input matches the allowed characters
        if (!letterRegex.test(charStr)) {
            event.preventDefault();
        }
        // Optionally, check the entire value against the name format regex
        var inputElement = event.target;
        var inputValue = inputElement.value + charStr; // Add the current character to the input value
        // Regex for valid name format "FirstName LastName"
        var nameRegex = /^[A-Z][a-z]+ [A-Z][a-z]+$/;
        // Check if the current value matches the valid name format
        if (!nameRegex.test(inputValue)) {
            // Handle invalid input (e.g., disable submit button, show error message)
            // Example:
            inputElement.classList.add('invalid'); // Apply CSS class for invalid input
        }
        else {
            inputElement.classList.remove('invalid'); // Remove invalid CSS class if format is valid
        }
    };
    LoansComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    LoansComponent.prototype.validateLoanAmountRange = function () {
        return function (control) {
            var value = control.value;
            if (isNaN(value) || value < 50000 || value > 1000000) {
                return { 'invalidRange': true };
            }
            return null;
        };
    };
    LoansComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loans',
            template: __webpack_require__(/*! ./loans.component.html */ "./src/app/loans/loans.component.html"),
            styles: [__webpack_require__(/*! ./loans.component.css */ "./src/app/loans/loans.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
    ], LoansComponent);
    return LoansComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseCtl"]));



/***/ }),

/***/ "./src/app/loans/loanslist.component.css":
/*!***********************************************!*\
  !*** ./src/app/loans/loanslist.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvYW5zL2xvYW5zbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/loans/loanslist.component.html":
/*!************************************************!*\
  !*** ./src/app/loans/loanslist.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  #nnn {\r\n    background: none;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .panel-heading {\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .content-wrapper {\r\n    background: url(assets/files/wall.jpg) no-repeat center center;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    width: 100%;\r\n    min-height: 100vh;\r\n    padding: 20px;\r\n  }\r\n\r\n  .table-responsive {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .full-height {\r\n    height: 100vh;\r\n  }\r\n</style>\r\n\r\n<div class=\"content-wrapper full-height\">\r\n  <div class=\"container-fluid full-height\">\r\n    <div class=\"panel panel-primary full-height\">\r\n      <div class=\"panel-heading\">\r\n        <h1 class=\"text-primary font-weight-bold\">{{ 'Loans List' | translate }}</h1>\r\n      </div>\r\n\r\n      <div class=\"row mt-3\">\r\n        <div class=\"col-md-3\">\r\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.searchParams.loanStartDate\"\r\n            (ngModelChange)=\"formatDate($event)\" placeholder=\"{{ 'Search loan Start Date' | translate }}\">\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"form.searchParams.loanAmount\"\r\n            placeholder=\"{{ 'Search loan Amount' | translate }}\">\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"form.searchParams.interestRate\"\r\n            placeholder=\"{{ 'Search interest Rate' | translate }}\">\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <select class=\"form-control\" name=\"customerIdId\" [(ngModel)]=\"form.searchParams.customerIdId\">\r\n            <option [ngValue]=\"undefined\">{{ 'Select customerId' | translate }}</option>\r\n            <option *ngFor=\"let obj of form.preload.customerIdList\" [value]=\"obj.key\">{{ obj.key }}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row mt-3 justify-content-center\">\r\n        <div class=\"col-md-2\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary btn-block\">{{ 'Search' | translate }}</button>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <button (click)=\"forward('/loans')\" type=\"button\" class=\"btn btn-success btn-block\">{{ 'Add loans' | translate }}</button>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger btn-block\">{{ 'Delete' | translate }}</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"form.error || form.message\" class=\"row mt-3 justify-content-center\">\r\n        <div class=\"col-md-6\">\r\n          <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{ form.message }}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{ form.message }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-responsive mt-3\">\r\n        <table class=\"table table-bordered table-hover font-weight-bold text-dark\">\r\n          <thead class=\"thead-dark text-uppercase\">\r\n            <tr align=\"center\">\r\n              <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" (change)=\"checkUncheckAll($event)\" /></th>\r\n              <th>{{ 'S.No' }}</th>\r\n              <th>{{ 'Loan Amount' }}</th>\r\n              <th>{{ 'Interest Rate' }}</th>\r\n              <th>{{ 'Loan Start Date' }}</th>\r\n              <th>{{ 'customerId' }}</th>\r\n              <th>{{ 'Edit' }}</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n              <td><input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" [id]=\"m.id\" /></td>\r\n              <td>{{ (form.pageNo * 5) + i + 1 }}</td>\r\n              <td>{{ m.loanAmount }}</td>\r\n              <td>{{ m.interestRate }}</td>\r\n              <td>{{ convertToLocalDate(m.loanStartDate) }}</td>\r\n              <td>{{ m.customerIdId }}</td>\r\n              <td>\r\n                <button class=\"fa fa-edit text-primary\" id=\"nnn\" (click)=\"forward('/loans/' + m.id)\"></button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <div class=\"d-flex justify-content-between mt-3\">\r\n        <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{ 'Previous' | translate }}</button>\r\n        <div *ngIf=\"form.list.length == 0\">\r\n          <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/loanslist']\" (click)=\"exit()\">{{ 'Back' | translate }}</a>\r\n        </div>\r\n        <button (click)=\"next()\" [disabled]=\"nextList == 0\" class=\"btn btn-info\">{{ 'Next' | translate }}</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/loans/loanslist.component.ts":
/*!**********************************************!*\
  !*** ./src/app/loans/loanslist.component.ts ***!
  \**********************************************/
/*! exports provided: LoanslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanslistComponent", function() { return LoanslistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var LoanslistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LoanslistComponent, _super);
    function LoanslistComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.LOANS, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null },
            inputerror: {},
            searchParams: {
                loanAmount: '',
                date: '',
                customerIdId: '',
                interestRate: '',
                loanStartDate: ''
            },
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        _this.isValidMobileInput = true;
        _this.isValidNameInput = true;
        _this.nameErrorMessage = '';
        _this.mobileErrorMessage = '';
        return _this;
    }
    LoanslistComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    // Format date function
    LoanslistComponent.prototype.formatDate = function (event) {
        var selectedDate = new Date(event);
        var formattedDate = selectedDate.toISOString().split('T')[0];
        this.form.searchParams.date = formattedDate;
    };
    // Convert date to local format for display
    LoanslistComponent.prototype.convertToLocalDate = function (dateString) {
        var date = new Date(dateString);
        // Format date to 'MM/DD/YYYY'
        var options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return date.toLocaleDateString(undefined, options);
    };
    // Validate input for name and mobile fields
    LoanslistComponent.prototype.validateInput = function (event, field) {
        var value = event.target.value;
        if (field === 'mobile') {
            this.isValidMobileInput = /^[0-9]*$/.test(value); // Check if the input contains only numbers
            if (!this.isValidMobileInput) {
                this.mobileErrorMessage = 'Please type numbers only';
            }
            else {
                this.mobileErrorMessage = '';
            }
        }
        else if (field === 'name') {
            this.isValidNameInput = /^[A-Za-z\s]*$/.test(value); // Check if the input contains only letters and spaces
            if (!this.isValidNameInput) {
                this.nameErrorMessage = 'Please type alphabets only';
            }
            else {
                this.nameErrorMessage = '';
            }
        }
    };
    // Submit method
    LoanslistComponent.prototype.submit = function () {
        // Reset page number before searching
        this.form.pageNo = 0;
        // Call the search method after formatting the date
        this.search();
    };
    // Search method
    LoanslistComponent.prototype.search = function () {
        // Clear previous search message
        this.form.searchMessage = null;
        // Perform the search operation with the search parameters
        _super.prototype.search.call(this);
    };
    LoanslistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loanslist',
            template: __webpack_require__(/*! ./loanslist.component.html */ "./src/app/loans/loanslist.component.html"),
            styles: [__webpack_require__(/*! ./loanslist.component.css */ "./src/app/loans/loanslist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], LoanslistComponent);
    return LoanslistComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/login/forgotpassword.component.html":
/*!*****************************************************!*\
  !*** ./src/app/login/forgotpassword.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar ></app-navbar>\r\n<style>\r\n  .grad{\r\n  background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n  background-repeat: no repeat;\r\n  background-size: 100%;\r\n  padding-bottom: 10px;\r\n  } \r\n  \r\n</style>\r\n<div class=\"row \" style=\"padding-top: 10%; padding-bottom:15%;\r\nbackground: url(assets/files/wall.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n\r\n  <div class=\"col-sm-4\">\r\n    \r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form #loginForm=\"ngForm\">\r\n          \r\n          <div style=\"text-align: center;\">\r\n          <h1 class=\"text-primary font-weight-bold\">{{'Forgot Password' | translate}}</h1>\r\n          </div>\r\n\r\n          <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"form.error == false && form.message == 'Password has been sent to email id'\"\r\n            class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Email Id' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"loginId\" [(ngModel)]=\"form.loginId\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Login Id' | translate}}\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <span class=\"alertRedColor\">{{inputerror.loginId}}</span>\r\n\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n              <button (click)=\"submit()\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">\r\n                {{'Reset My Password' | translate}}</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  \r\n</div>\r\n  </div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/login/forgotpassword.component.ts":
/*!***************************************************!*\
  !*** ./src/app/login/forgotpassword.component.ts ***!
  \***************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_data_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utility/data-validator */ "./src/app/utility/data-validator.ts");





var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(httpService, dataValidator, router) {
        this.httpService = httpService;
        this.dataValidator = dataValidator;
        this.router = router;
        this.endpoint = "http://localhost:8084/Auth";
        this.form = {
            error: false,
            message: "",
            loginId: '',
        };
        this.inputerror = {};
        this.message = '';
    }
    ForgotPasswordComponent.prototype.validate = function () {
        var flag = true;
        flag = flag && this.dataValidator.isNotNull(this.form.loginId);
        return flag;
    };
    /**
     * Initialize component
     */
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.prototype.submit = function () {
        var _self = this;
        this.httpService.get(_self.endpoint + "/fp/" + this.form.loginId, function (res) {
            console.log('MyResponse', res);
            _self.form.message = '';
            _self.inputerror = {};
            console.log(res.result.message + '------>msg');
            if (res.result.message) {
                _self.form.message = res.result.message;
                console.log(_self.form.message + '-------> msg in sucess');
            }
            _self.form.error = !res.success;
            console.log(_self.form.error + '-----------> msg in self.form.error in res');
            if (_self.form.error && res.result.inputerror) {
                _self.inputerror = res.result.inputerror;
                console.log(_self.inputerror + '-----------> msg in self.form.error');
            }
        });
    };
    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgotpassword.component.html */ "./src/app/login/forgotpassword.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpServiceService"], _utility_data_validator__WEBPACK_IMPORTED_MODULE_4__["DataValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertRedColor {\r\n    color: red;\r\n}\r\n\r\n\r\n.required-field::after { \t\t\r\n  content: \"*\";\t\t\r\n  color: red;\t\t\r\n   }\r\n\r\n\r\n.successColor{\r\n    color: green;\r\n   }\r\n\r\n\r\n.btn-space {\r\n    margin-right: 5px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7QUFDZDs7O0FBR0E7RUFDRSxZQUFZO0VBQ1osVUFBVTtHQUNUOzs7QUFFQTtJQUNDLFlBQVk7R0FDYjs7O0FBRUE7SUFDQyxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsZXJ0UmVkQ29sb3Ige1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuXHJcbi5yZXF1aXJlZC1maWVsZDo6YWZ0ZXIgeyBcdFx0XHJcbiAgY29udGVudDogXCIqXCI7XHRcdFxyXG4gIGNvbG9yOiByZWQ7XHRcdFxyXG4gICB9XHRcclxuXHJcbiAgIC5zdWNjZXNzQ29sb3J7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbiAgIH1cclxuXHJcbiAgIC5idG4tc3BhY2Uge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar #one></app-navbar>\r\n<style>\r\n  #nnn{\r\n    background: none;\r\n    border: none;\r\n  }\r\n  \r\n  </style>\r\n  \r\n  \r\n<style type=\"text/css\">\r\n  .log1 {\r\n    padding-top: 13%; \r\n  }\r\n  \r\n  .input-group-addon {\r\n    box-shadow: 9px 8px 7px #001a33;\r\n    \r\n  }\r\n  .grad{\r\n  background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n  background-repeat: no repeat;\r\n  background-size: 100%;\r\n  padding-bottom: 10px;\r\n    \r\n  }\r\n  </style>\r\n<div class=\"row \" style=\"padding-top: 8%; padding-bottom: 8%;\r\nbackground: url(assets/files/Login3.jpg) no-repeat center center;\r\n   background-attachment: fixed;\r\nbackground-size: 225vh;width:auto;\r\n  height: 105vh;\">\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card input-group-addon grad\">\r\n      <div class=\"card-body\">\r\n        <form>\r\n          <div style=\"text-align: center;\">\r\n            <h1 class=\"text-primary font-weight-bold\">{{'Login' | translate}}</h1>\r\n          </div>\r\n          <input type=\"hidden\" name=\"log\r\n          inUrl\" [(ngModel)]=\"form.loginUrl\" class=\"form-control\">\r\n          <div *ngIf=\"form.error && form.message == 'Invalid ID or Password'\"\r\n            class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{'Invalid ID or Password' | translate}}\r\n          </div>\r\n          <div *ngIf=\"form.error==false && form.message == 'Logout Successfully'\"\r\n            class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{'Log out successfully' | translate}}\r\n          </div>\r\n\r\n          <div *ngIf=\"form.message == 'OOPS! Your session has been expired'\"\r\n            class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{'OOPS! Your session has been expired' | translate}}\r\n          </div>\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Email Id' | translate}}</b>\r\n              <span class=\"required-field\"></span>\r\n            </span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"loginId\" [(ngModel)]=\"form.loginId\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Login Id' | translate}}\">\r\n              </div>\r\n            </div>\r\n           <span  *ngIf=\"inputerror.loginId != null\"\r\n          class=\"alertRedColor\" style=\" color: red;\" > {{'loginId'| translate}} </span> \r\n          </div>\r\n           <!-- <span class=\"alertRedColor\">{{inputerror.loginId}}</span>  -->\r\n          <div style=\"padding-top:3%\">\r\n            <span><b>{{'Password' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-key grey-text \"></i> </div>\r\n                </div>\r\n                <input type=\"password\" name=\"pwd\" [(ngModel)]=\"form.password\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Password' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span  *ngIf=\"inputerror.password != null\"\r\n            class=\"alertRedColor\" style=\" color: red;\" > {{'password'| translate}} </span> \r\n\r\n            <!-- <span class=\"alertRedColor\">{{inputerror.password}}</span> -->\r\n          </div>\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n              <button (click)=\"signIn()\" class=\"btn btn-md btn-success\">\r\n                {{'Sign in' | translate}}</button>\r\n            </div>\r\n            &nbsp;&nbsp;&nbsp;\r\n            <div class=\"pl-3 pt-2\">\r\n              <a class=\"btn btn-warning\" [routerLink]=\"['/forgotpassword']\">{{'Forgot Password' | translate}}</a>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_data_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utility/data-validator */ "./src/app/utility/data-validator.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");








var LoginComponent = /** @class */ (function () {
    function LoginComponent(httpService, dataValidator, router, cookieService, route, serviceLocator) {
        this.httpService = httpService;
        this.dataValidator = dataValidator;
        this.router = router;
        this.cookieService = cookieService;
        this.route = route;
        this.serviceLocator = serviceLocator;
        this.endpoint = "http://localhost:8084/Auth";
        this.form = {
            error: false,
            message: '',
            loginId: '',
            password: '',
            loginUrl: '',
        };
        this.inputerror = {};
        this.message = '';
        this.userparams = {
            url: '',
            sessionExpiredMsg: '',
            methodType: '',
        };
    }
    /**
     * Initialize component
     */
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.form.message = params['errorMessage'] || null;
            console.log("mas>>>>>>>>>>>>>>>gg.>>", _this.form.message);
        });
        this.userSessionCheck();
        if (this.httpService.form.error == true) {
            this.form.message = this.httpService.form.message;
            this.form.error = this.httpService.form.error;
        }
        var a = '';
        this.serviceLocator.getPathVariable(this.route, function (params) {
            a = params["userparams"];
            console.log('I GOT ID, its logout', a);
        });
        if (a == 'true') {
            this.form.message = 'Logout Successfully';
        }
    };
    LoginComponent.prototype.userSessionCheck = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            //  this.userList = params.get('userparams');    
            //  this.userparams=JSON.parse(this.route.snapshot.paramMap.get('userparams'));
            _this.userparams = JSON.parse(_this.route.snapshot.queryParamMap.get('userparams'));
            if (_this.userparams != null) {
                _this.form.message = _this.userparams.sessionExpiredMsg;
                _this.form.loginUrl = _this.userparams.url;
                //  console.log('URL-----------------------' + this.userparams.url);
                //  console.log('Message-----------------------' + this.userparams.sessionExpiredMsg);
                //  console.log('Method Type-----------------------' + this.userparams.methodType);
            }
        });
        if (this.form.message != null) {
            this.form.error = true;
        }
    };
    LoginComponent.prototype.validate = function () {
        var flag = true;
        flag = flag && this.dataValidator.isNotNull(this.form.loginId);
        console.log(this.form.loginId);
        flag = flag && this.dataValidator.isNotNull(this.form.password);
        console.log(this.form.password);
        return flag;
    };
    LoginComponent.prototype.signIn = function () {
        var _self = this;
        this.form.error = false;
        var requestedUrl = this.httpService.userparams.url; //to get the URI
        console.log('signIn----', this.form);
        this.httpService.post(this.endpoint + "/login", this.form, function (res) {
            console.log('MyResponse', res);
            _self.form.message = '';
            _self.inputerror = {};
            //_self.form.loginId = res.result.loginId;
            if (_self.dataValidator.isNotNullObject(res.result.message)) {
                _self.form.message = res.result.message;
            }
            _self.form.error = !res.success;
            if (_self.dataValidator.isNotNullObject(res.result.inputerror)) {
                _self.inputerror = res.result.inputerror;
            }
            if (_self.dataValidator.isTrue(res.success)) {
                localStorage.setItem("loginId", res.result.loginId);
                localStorage.setItem("role", res.result.role);
                localStorage.setItem("fname", res.result.fname);
                localStorage.setItem("lname", res.result.lname);
                localStorage.setItem("userid", res.result.data.id);
                //   console.log(res.result.data.id + 'sessionId set ----');
                //   console.log(res.result.token + '  Token set ----');
                if (requestedUrl != null && requestedUrl != '') {
                    _self.router.navigateByUrl(requestedUrl);
                }
                else {
                    _self.router.navigateByUrl('dashboard');
                }
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpServiceService"], _utility_data_validator__WEBPACK_IMPORTED_MODULE_4__["DataValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _service_locator_service__WEBPACK_IMPORTED_MODULE_6__["ServiceLocatorService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/signup.component.html":
/*!*********************************************!*\
  !*** ./src/app/login/signup.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n   .grad{\r\n  background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n  background-repeat: no repeat;\r\n  background-size: 100%;\r\n  padding-bottom: 25px\r\n  ;\r\n  }\r\n \r\n</style>\r\n<div class=\"row \" style=\" padding-top: 4%;\r\n padding-bottom:0%;background-image: url(../../assets/files/wall.jpg);\r\nbackground-attachment: fixed;\r\nbackground-size: 100%;\r\n  height: 120vh;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n         <form>\r\n          <div style=\"text-align: center;\">\r\n            <h3 class=\"text-primary font-weight-bold\">\r\n              {{'Sign Up' | translate}}\r\n            </h3>\r\n          </div>\r\n\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message != null && form.message.length>0\"\r\n            class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n          <div style=\"padding-top:0.3%\">\r\n            <span class=\"pt-2\"><b>{{'First Name' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"firstName\" [(ngModel)]=\"form.data.firstName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter First Name' | translate}}\">\r\n              </div>\r\n            </div><span  *ngIf=\"form.inputerror.firstName != null\"\r\n            class=\"alertRedColor\" style=\" color: red;\" > {{'firstname'| translate}} </span>\r\n            <!-- <span class=\"alertRedColor\" style=\" color: red;\"> {{form.inputerror.firstName}} </span> -->\r\n          </div>\r\n\r\n          <div style=\"padding-top:0.1%\">\r\n            <span class=\"pt-2\"><b>{{'Last Name' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"lastName\" [(ngModel)]=\"form.data.lastName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Last Name' | translate}}\">\r\n              </div>\r\n            </div><span  *ngIf=\"form.inputerror.lastName != null\"\r\n            class=\"alertRedColor\" style=\" color: red;\" > {{'lastname'| translate}} </span>\r\n            <!-- <span class=\"alertRedColor\" style=\" color: red;\"> {{form.inputerror.lastName}} </span> -->\r\n          </div>\r\n\r\n          <div style=\"padding-top:0.1%\">\r\n            <span class=\"pt-2\"><b>{{'Login id' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"login\" [(ngModel)]=\"form.data.login\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Email Id' | translate}}\">\r\n\r\n              </div>\r\n            </div><span  *ngIf=\"form.inputerror.login != null\"\r\n            class=\"alertRedColor\" style=\" color: red;\" > {{'email'| translate}} </span>\r\n            <!-- <span class=\"alertRedColor\" style=\" color: red;\"> {{form.inputerror.login}} </span> -->\r\n          </div>\r\n\r\n          <div style=\"padding-top:0.1%\">\r\n            <span class=\"pt-2\"><b>{{'Password' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-key grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"password\" name=\"password\" [(ngModel)]=\"form.data.password\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Password' | translate}}\">\r\n              </div>\r\n            </div><span  *ngIf=\"form.inputerror.password != null\"\r\n            class=\"alertRedColor\" style=\" color: red;\" > {{'password'| translate}} </span>\r\n            <!-- <span class=\"alertRedColor\" style=\" color: red;\"> {{password | translate}} </span> -->\r\n          </div>\r\n\r\n          <div style=\"padding-top:0.1%\">\r\n            <span class=\"pt-2\"><b>{{'Mobile' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"phone\" maxlength=\"10\" [(ngModel)]=\"form.data.phone\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Mobile Number' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span  *ngIf=\"form.inputerror.phone != null\"\r\n              class=\"alertRedColor\" style=\" color: red;\" > {{'phone'| translate}} </span>\r\n          </div>\r\n\r\n          <!-- <div style=\"padding-top:0.1%\">\r\n            <span class=\"pt-2\"><b>{{'Alternate Mobile' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-mobile grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"alternateMobile\" [(ngModel)]=\"form.data.alternateMobile\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Alternate Number' | translate}}\">\r\n              </div>\r\n            </div><span  *ngIf=\"form.inputerror.alternateMobile != null\"\r\n            class=\"alertRedColor\" style=\" color: red;\" > {{'mobile'| translate}} </span>\r\n            <!-- <span class=\"alertRedColor\" style=\" color: red;\"> {{form.inputerror.phone}} </span> \r\n          <!-- </div>  -->\r\n\r\n          <div style=\"padding-top:0.1%\">\r\n            <span class=\"pt-2\"><b>{{'DOB' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"date\" name=\"dob\" [(ngModel)]=\"form.data.dob\" class=\"form-control\">\r\n              </div>\r\n            </div> <span  *ngIf=\"form.inputerror.dob != null\"\r\n            class=\"alertRedColor\" style=\" color: red;\" > {{'dob'| translate}} </span>\r\n            <!-- <span class=\"alertRedColor\" style=\" color: red;\"> {{form.inputerror.dob}} </span> -->\r\n          </div>\r\n\r\n          <div style=\"padding-top:0.1%\">\r\n            <span class=\"pt-2\"><b>{{'Gender' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-venus grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"gender\" id=\"gender\" [(ngModel)]=\"form.data.gender\"\r\n                  style=\"cursor: pointer;\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{'Please select' | translate}}</option>\r\n                  <option value=\"Male\">{{'Male' | translate}} </option>\r\n                  <option value=\"Female\">{{'Female' | translate}} </option>\r\n                </select>\r\n              </div>\r\n            </div> <span  *ngIf=\"form.inputerror.gender != null\"\r\n            class=\"alertRedColor\" style=\" color: red;\" > {{'gender'| translate}} </span>\r\n            <!-- <span class=\"alertRedColor\" style=\" color: red;\"> {{form.inputerror.gender}} </span> -->\r\n          </div>\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"col-md-3\"></div>\r\n            <div class=\"pt-2\">\r\n\r\n\r\n              <button (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Sign up' | translate}}</button>\r\n            </div>\r\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n            <div class=\"pt-2\">\r\n\r\n              <a class=\"btn btn-warning mr-1\"[routerLink]=\"['/signup']\" (click)=\"exit()\">{{'Reset' | translate}}</a>\r\n\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/login/signup.component.ts":
/*!*******************************************!*\
  !*** ./src/app/login/signup.component.ts ***!
  \*******************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_data_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utility/data-validator */ "./src/app/utility/data-validator.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");






var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(serviceLocator, httpService, dataValidator, router) {
        this.serviceLocator = serviceLocator;
        this.httpService = httpService;
        this.dataValidator = dataValidator;
        this.router = router;
        this.endpoint = "http://localhost:8084/Auth/signUp";
        this.form = {
            error: false,
            message: '',
            data: { id: null },
            inputerror: {},
        };
    }
    SignUpComponent.prototype.validate = function () {
        return this.validateForm(this.form);
    };
    /**
     * Override by childs
     *
     * @param form
     */
    SignUpComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.firstName);
        flag = flag && validator.isNotNullObject(form.lastName);
        flag = flag && validator.isNotNullObject(form.loginId);
        flag = flag && validator.isNotNullObject(form.password);
        flag = flag && validator.isNotNullObject(form.phone);
        flag = flag && validator.isNotNullObject(form.gender);
        flag = flag && validator.isNotNullObject(form.dob);
        return flag;
    };
    /**
     * Initialize component
     */
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.exit = function () {
        location.reload();
    };
    SignUpComponent.prototype.reset = function () {
        this.router.navigate(['/signup']);
    };
    SignUpComponent.prototype.submit = function () {
        var _self = this;
        this.httpService.post(this.endpoint, this.form.data, function (res) {
            console.log('MyResponse', res);
            _self.form.message = '';
            _self.form.inputerror = {};
            if (res.result.message) {
                _self.form.message = res.result.message;
            }
            _self.form.error = !res.success;
            if (_self.form.error && res.result.inputerror) {
                _self.form.inputerror = res.result.inputerror;
            }
        });
    };
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/login/signup.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_5__["ServiceLocatorService"], _http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpServiceService"], _utility_data_validator__WEBPACK_IMPORTED_MODULE_4__["DataValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/marksheet/getmarksheet.component.html":
/*!*******************************************************!*\
  !*** ./src/app/marksheet/getmarksheet.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div  style=\"\r\nbackground: url(assets/files/gettyimages-1132439283-640x640.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;\r\npadding-top: 5%;\r\npadding-bottom: 24%;\r\nwidth:100%;\r\n  height: 100;\">\r\n  <form name=\"rollForm\" (ngSubmit)=\"go()\">\r\n    <div align=\"center\">\r\n      <div style=\"font-size: 80px;\">\r\n      <p class=\"font-weight-bold text-primary\">{{'Get Marksheet' | translate }}</p>\r\n    </div>\r\n    </div>\r\n    <div class=\"row pt-4 pb-4\">\r\n      <div class=\"col-sm-4 \"></div>\r\n      <div class=\"col-md-2 col-sm-2 col-xs-2\">\r\n        <input type=\"text\" name=\"rollNo\" id=\"rollNo\" class=\"form-control\" [(ngModel)]=\"form.data.rollNo\"\r\n          placeholder=\"{{'Enter Roll Number' | translate }}\">&emsp;</div>\r\n      <div class=\"col-md-2 col-sm-2 col-xs-2\">\r\n        <button type=\"submit\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">\r\n          {{'Search' | translate }}</button>\r\n        <a class=\"btn btn-primary\" [routerLink]=\"['/getmarksheet']\"> {{'Reset' | translate}} </a>\r\n        \r\n        &emsp;\r\n\r\n      </div>\r\n      <div class=\"col-md-3 col-sm-3 col-xs-3\"></div>\r\n\r\n    </div>\r\n  </form>\r\n  <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n    {{form.message}}\r\n  </div>\r\n  <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n    {{form.message}}\r\n  </div>\r\n\r\n  <div class=\"container\" *ngIf=\"form.list.rollNo!= null\" >\r\n\r\n    <table width=\"100%\" class=\"table table-bordered table-striped table-hover\" border=\"3px\">\r\n      <tr>\r\n        <th id=\"po1\" colspan=\"2\">{{'RollNO' | translate }}</th>\r\n        <td id=\"po1\" colspan=\"3\">{{form.list.rollNo}}</td>\r\n      </tr>\r\n      <tr>\r\n        <th id=\"po1\" colspan=\"2\">{{'Name' | translate }}</th>\r\n        <td id=\"po1\" colspan=\"3\">{{form.list.name}}</td>\r\n      </tr>\r\n      <tr>\r\n        <th id=\"po1\">{{'Marks' | translate }}</th>\r\n        <th align=\"center\" id=\"po1\">{{'Max Marks' | translate }}</th>\r\n        <th  align=\"center\" id=\"po1\">{{'Min Marks' | translate }}</th>\r\n        <th  align=\"center\" id=\"po1\">{{'Marks Obtain' | translate }}</th>\r\n      </tr>\r\n      <tr>\r\n        <th id=\"po1\" colspan=\"2\">{{'Subject' | translate }}</th>\r\n        \r\n      </tr>\r\n      <tr>\r\n        <th id=\"po1\">{{'Physics' | translate }}</th>\r\n        <td align=\"center\">100</td>\r\n        <td align=\"center\">35</td>\r\n        <td id=\"po1\" align=\"center\">\r\n          <!-- <span style=\"color: red;\">{{form.list.physics}}*</span> -->\r\n          <span [ngStyle]=\"{'color': (form.list.physics >35) ? 'green': 'red' }\">{{form.list.physics}}</span>\r\n          \r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <th id=\"po1\">{{'Chemistry' | translate }}</th>\r\n        <td align=\"center\">100</td>\r\n        <td align=\"center\">35</td>\r\n        <td id=\"po1\" align=\"center\">\r\n          <!-- <span style=\"color: red;\">{{form.list.chemistry}}*</span>  -->\r\n          <span [ngStyle]=\"{'color': (form.list.chemistry >35) ? 'green': 'red' }\">{{form.list.chemistry}}</span>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <th id=\"po1\">{{'Maths' | translate }}</th>\r\n        <td align=\"center\">100</td>\r\n        <td align=\"center\">35</td>\r\n        <td id=\"po1\" align=\"center\">\r\n          <!-- <span style=\"color: red;\">{{form.list.maths}}*</span> -->\r\n          <span [ngStyle]=\"{'color': (form.list.maths >35) ? 'green': 'red' }\">{{form.list.maths}}</span>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <th id=\"po1\" colspan=\"2\">{{'Total' | translate }}</th>\r\n\r\n        <td id=\"po1\" colspan=\"3\" align=\"center\">{{form.list.maths+form.list.physics+form.list.chemistry}}</td>\r\n      </tr>\r\n      <tr>\r\n\r\n        <th id=\"po1\" colspan=\"2\">{{'Percentage' | translate }}</th>\r\n\r\n        <td id=\"po1\" colspan=\"3\" align=\"center\">\r\n          {{((form.list.physics+form.list.maths+form.list.chemistry)*100)/300 | number:'2.0-2' }}%\r\n        \r\n          \r\n        \r\n        \r\n        </td>\r\n      </tr>\r\n     <!--  <tr>\r\n        <th id=\"po1\" align=\"center\" colspan=\"2\">\r\n          <font color=\"blue\">{{'Grade' | translate }}</font>\r\n        </th>\r\n        <td id=\"po1\" align=\"center\" colspan=\"3\">\r\n          <font color=\"green\"><b>{{'PASS' | translate }}</b></font>\r\n        </td>\r\n      </tr> -->\r\n\r\n      <!-- <tr>\r\n        <th id=\"po1\" align=\"center\" colspan=\"2\">\r\n          <font color=\"blue\">{{'Final Grade' | translate }}</font>\r\n          <font color=\"red\"><b>F</b></font>\r\n        </th>\r\n        <td id=\"po1\" align=\"center\" colspan=\"3\">\r\n          <font color=\"red\"><b>{{'FAIL' | translate }}</b></font>\r\n        </td>\r\n      </tr> -->\r\n      <tr>\r\n        <th id=\"po1\" align=\"center\" colspan=\"2\">\r\n          <font color=\"blue\">{{'Final Grade' | translate }}</font>         \r\n        </th>\r\n        <td id=\"po1\" align=\"center\" colspan=\"3\"  *ngIf=\"((form.list.physics+form.list.maths+form.list.chemistry)*100)/300 > 35; else elseBlock\">\r\n\r\n          <font color=\"green\"><b>{{'Pass' | translate }}</b></font>\r\n        </td>\r\n        <ng-template #elseBlock><td id=\"po1\" align=\"center\" colspan=\"3\" ><font color=\"red\"><b>{{'Fail' | translate }}</b></font></td></ng-template>\r\n      </tr>\r\n\r\n    </table>\r\n    \r\n</div><div style=\"position: relative; clear: both;\">\r\n  <app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/marksheet/getmarksheet.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/marksheet/getmarksheet.component.ts ***!
  \*****************************************************/
/*! exports provided: GetmarksheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetmarksheetComponent", function() { return GetmarksheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");






var GetmarksheetComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GetmarksheetComponent, _super);
    function GetmarksheetComponent(locator, route, httpservice) {
        var _this = _super.call(this, locator.endpoints.Marksheet, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpservice = httpservice;
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null, rollNo: null },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        return _this;
    }
    GetmarksheetComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    GetmarksheetComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.rollNo);
        return flag;
    };
    GetmarksheetComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.rollNo = data.rollNo;
    };
    GetmarksheetComponent.prototype.go = function () {
        var _self = this;
        console.log("onClickSubmit");
        console.log(this.form.data);
        console.log(this.form.data.rollNo);
        this.httpservice.get("http://localhost:8084/Marksheet/rollno/" + this.form.data.rollNo, function (res) {
            if (res.success) {
                _self.form.list = res.result.data;
                if (_self.form.list.length == 0) {
                    _self.form.message = "No record found";
                    _self.form.error = true;
                }
                console.log("List Size", _self.form.list.length);
            }
            else {
                _self.form.error = false;
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    GetmarksheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-getmarksheet',
            template: __webpack_require__(/*! ./getmarksheet.component.html */ "./src/app/marksheet/getmarksheet.component.html"),
            styles: [__webpack_require__(/*! ./marksheet.component.css */ "./src/app/marksheet/marksheet.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"]])
    ], GetmarksheetComponent);
    return GetmarksheetComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseCtl"]));



/***/ }),

/***/ "./src/app/marksheet/marksheet-list.component.html":
/*!*********************************************************!*\
  !*** ./src/app/marksheet/marksheet-list.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"content-wrapper\" style=\"padding-top: 3%;padding-bottom: 8%; \r\nbackground: url(assets/files/teahub.png) no-repeat center center;\r\nbackground-repeat: no-repeat;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: 90vh;\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\" style=\"height: 50px;\">\r\n        <!-- <div class=\"col-sm-6 p-1 text-center\"> -->\r\n        <div class=\"text-center\">\r\n          <h1 class=\"text-white font-weight-bold\">{{'Marksheet List' | translate}}</h1>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row  pt-4 pb-4 \" style=\"margin-left:15%\">\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.name\"\r\n            placeholder=\"{{'Search Name'| translate}}\">\r\n        </div>\r\n      \r\n        <div class=\"col-sm-2\">\r\n\r\n          <select class=\"form-control\" name=\"id\" [(ngModel)]=\"form.searchParams.id\" aria-label=\"ngSelected\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{' Select Roll No' | translate }}</option>\r\n            <option *ngFor=\"let obj of form.preload.marksheetList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n          </select>\r\n\r\n        </div>\r\n        <div class=\"col-sm-1 ml-3\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\r\n            {{'Search'| translate}}</button>\r\n        </div>\r\n        &nbsp;&nbsp;&nbsp;\r\n        <div class=\"col-lg-2 ml-4\">\r\n          <button (click)=\"forward('/marksheet')\" type=\"button\" class=\"btn btn-success\">{{'Add Marksheet'| translate}}\r\n          </button>\r\n        </div>\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n            {{'Delete'| translate}}</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-striped table-hover font-weight-bold text-white\">\r\n            <thead class=\"thead-light text-uppercase\">\r\n              <tr>\r\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\"\r\n                    (change)=\"checkUncheckAll($event)\" /></th>\r\n                <th>{{'S.No'| translate}}</th>\r\n                <th>{{'RollNO'| translate}}</th>\r\n                <th>{{'Name'| translate}}</th>\r\n                <th>{{'Physics'| translate}}</th>\r\n                <th>{{'Chemistry'| translate}}</th>\r\n                <th>{{'Maths'| translate}}</th>\r\n                <th>{{'Edit' | translate}}</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let m of form.list; let i = index\">\r\n                <!-- <td> <input type=\"checkbox\" name=\"list_name\" value=\"{{isMasterSel}}\" [(ngModel)]=\"isMasterSel\" (change)=\"isAllSelected()\"/>\r\n                  </td> -->\r\n                <td> <input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" id=\"{{m.id}}\"\r\n                    value=\"{{isMasterSel}}\" />\r\n                </td>\r\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\r\n                \r\n\r\n                <td> {{ m.rollNo }} </td>\r\n                <td> {{ m.name }} </td>\r\n                <td> {{ m.physics }} </td>\r\n                <td> {{ m.chemistry }} </td>\r\n                <td> {{ m.maths }} </td>\r\n                <td>\r\n                  <a (click)=\"forward( '/marksheet/' +  m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-edit text-info\"></i>\r\n                  </a>\r\n\r\n                  <!-- <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-trash text-danger\"></i>\r\n                  </a> -->\r\n                </td>\r\n\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <table style=\"width: 100%;\">\r\n          <tr>\r\n            <td style=\"width: 50%;\">\r\n              <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\r\n                }} </button>\r\n            </td>\r\n            <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\r\n            <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><a class=\"btn btn-warning mr-1\"\r\n              [routerLink]=\"['/marksheetlist']\"  (click)=\"exit()\">{{'Back' | translate}}</a></td>\r\n\r\n\r\n\r\n\r\n\r\n            <td><button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\r\n                translate }}</button></td>\r\n          </tr>\r\n        </table>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  <app-footer></app-footer>"

/***/ }),

/***/ "./src/app/marksheet/marksheet-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/marksheet/marksheet-list.component.ts ***!
  \*******************************************************/
/*! exports provided: MarksheetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarksheetListComponent", function() { return MarksheetListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var MarksheetListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MarksheetListComponent, _super);
    function MarksheetListComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.MARKSHEET, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.myKey = "";
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        return _this;
    }
    MarksheetListComponent.prototype.createImageFromBlob = function (image) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            _this.imageToShow = reader.result;
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
    };
    MarksheetListComponent.prototype.getImage = function (id) {
        var _this = this;
        //Make a call to Sprinf Boot to get the Image Bytes.
        this.form.data.id = id;
        console.log(this.form.data.id);
        this.httpClient.get('http://localhost:8084/Marksheet/profilePic/' + this.form.data.id, { responseType: 'blob' }).subscribe(function (data) {
            _this.createImageFromBlob(data);
            _this.myKey = _this.form.data.id;
        }, function (error) {
            console.log(error);
        });
    };
    MarksheetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-marksheet-list',
            template: __webpack_require__(/*! ./marksheet-list.component.html */ "./src/app/marksheet/marksheet-list.component.html"),
            styles: [__webpack_require__(/*! ./marksheet.component.css */ "./src/app/marksheet/marksheet.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], MarksheetListComponent);
    return MarksheetListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/marksheet/marksheet.component.css":
/*!***************************************************!*\
  !*** ./src/app/marksheet/marksheet.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertRedColor {\r\n    color: red;\r\n}\r\n\r\n\r\n.required-field::after { \t\t\r\n  content: \"*\";\t\t\r\n  color: red;\t\t\r\n   }\r\n\r\n\r\n.successColor{\r\n    color: green;\r\n   }\r\n\r\n\r\n.btn-space {\r\n    margin-right: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFya3NoZWV0L21hcmtzaGVldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkOzs7QUFHQTtFQUNFLFlBQVk7RUFDWixVQUFVO0dBQ1Q7OztBQUVBO0lBQ0MsWUFBWTtHQUNiOzs7QUFFQTtJQUNDLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL21hcmtzaGVldC9tYXJrc2hlZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGVydFJlZENvbG9yIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcblxyXG4ucmVxdWlyZWQtZmllbGQ6OmFmdGVyIHsgXHRcdFxyXG4gIGNvbnRlbnQ6IFwiKlwiO1x0XHRcclxuICBjb2xvcjogcmVkO1x0XHRcclxuICAgfVx0XHJcblxyXG4gICAuc3VjY2Vzc0NvbG9ye1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICB9XHJcblxyXG4gICAuYnRuLXNwYWNlIHtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/marksheet/marksheet.component.html":
/*!****************************************************!*\
  !*** ./src/app/marksheet/marksheet.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad{\r\n background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n background-repeat: no repeat;\r\n background-size: 100%;\r\n padding-bottom: 25px\r\n ;\r\n }\r\n\r\n</style>\r\n\r\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:3%;\r\nbackground: url(assets/files/wall.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Add Marksheet' | translate}}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Update Marksheet' | translate}}</h2>\r\n          \r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Roll No' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-id-card grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"rollNo\" [(ngModel)]=\"form.data.rollNo\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Roll No' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.rollNo}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Student' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\r\n                </div>\r\n                \r\n\r\n                <select class=\"form-control\" required name=\"studentId\"\r\n                  [(ngModel)]=\"form.data.studentId\" style=\"cursor: pointer;\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{' Select Student' | translate }}</option>\r\n                  <option *ngFor=\"let obj of form.preload.studentList\" [value]=\"obj.id\">{{obj.firstName + ' ' +obj.lastName }}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.studentId}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Physics' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-check grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"phy\" [(ngModel)]=\"form.data.physics\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Physics Marks' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.physics}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Chemistry' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-check grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"chemistry\" [(ngModel)]=\"form.data.chemistry\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Chemistry Marks' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.chemistry}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Maths' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-check grey-text\"></i> </div>\r\n                </div>\r\n                \r\n                <input type=\"text\" name=\"math\" [(ngModel)]=\"form.data.maths\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Maths Marks'| translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.maths}} </span>\r\n          </div>\r\n         \r\n         \r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\"  class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate}}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Update'| translate}}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button (click)=\"forward('/marksheetlist')\" type=\"button\" class=\"btn btn-warning mr-1\">{{'Back'| translate}}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/marksheet/marksheet.component.ts":
/*!**************************************************!*\
  !*** ./src/app/marksheet/marksheet.component.ts ***!
  \**************************************************/
/*! exports provided: MarksheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarksheetComponent", function() { return MarksheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");






var MarksheetComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MarksheetComponent, _super);
    function MarksheetComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.MARKSHEET, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.getKey = false;
        _this.selected = null;
        _this.fileToUpload = null;
        _this.marksheetForm = null;
        return _this;
    }
    MarksheetComponent.prototype.submit = function () {
        var _self = this;
        console.log('in submit');
        console.log(this.form);
        console.log(this.form.data);
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.data.id = res.result.data;
            if (_self.fileToUpload) {
                console.log('Dheeraj');
                _self.myFile();
            }
            if (res.success) {
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("----------Dheeraj----------.");
            }
            else {
                _self.form.error = true;
                if (res.result.inputerror) {
                    _self.form.inputerror = res.result.inputerror;
                }
                _self.form.message = res.result.message;
            }
            _self.form.data.id = res.result.data;
            console.log('FORM', _self.form);
        });
    };
    MarksheetComponent.prototype.onFileSelect = function (files) {
        this.fileToUpload = files.item(0);
        console.log(this.fileToUpload);
    };
    MarksheetComponent.prototype.onUpload = function (marksheetform) {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    MarksheetComponent.prototype.myFile = function () {
        var _this = this;
        console.log(this.form.data.id + 'after super.submit-----');
        this.onSubmitProfile(this.fileToUpload, this.marksheetForm).subscribe(function (data) {
            console.log(_this.fileToUpload);
        }, function (error) {
            console.log(error);
        });
    };
    MarksheetComponent.prototype.onSubmitProfile = function (fileToUpload, marksheetform) {
        var formData = new FormData();
        var phone = null;
        formData.append('file', fileToUpload);
        console.log(this.form.data.id + 'this id number ======');
        return this.httpClient.post("http://localhost:8084/User/profilePic/" + this.form.data.id, formData);
    };
    MarksheetComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    MarksheetComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        console.log('Student name :: ' + form.name);
        flag = flag && validator.isNotNullObject(form.rollNo);
        flag = flag && validator.isNotNullObject(form.name);
        flag = flag && validator.isNotNullObject(form.physics);
        flag = flag && validator.isNotNullObject(form.chemistry);
        flag = flag && validator.isNotNullObject(form.maths);
        return flag;
    };
    MarksheetComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.studentId = data.studentId;
        form.rollNo = data.rollNo;
        form.physics = data.physics;
        form.chemistry = data.chemistry;
        form.maths = data.maths;
        form.imageId = data.imageId;
        console.log('Populated Form', form);
    };
    MarksheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-marksheet',
            template: __webpack_require__(/*! ./marksheet.component.html */ "./src/app/marksheet/marksheet.component.html"),
            styles: [__webpack_require__(/*! ./marksheet.component.css */ "./src/app/marksheet/marksheet.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_5__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MarksheetComponent);
    return MarksheetComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseCtl"]));



/***/ }),

/***/ "./src/app/marksheet/marksheetmerit-list.component.html":
/*!**************************************************************!*\
  !*** ./src/app/marksheet/marksheetmerit-list.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad{\r\n  background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n  background-repeat: no repeat;\r\n  background-size: 100%;\r\n  padding-bottom: 10px;\r\n  }\r\n  \r\n</style>\r\n<div class=\"content-wrapper\" style=\"padding-top: 1%;padding-bottom: 1%; \r\nbackground: url(assets/files/gettyimages-1132439283-640x640.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\" >\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\" style=\"height: 50px;\">\r\n        <div class=\"col-sm-12 pt-3\"> \r\n          <h3 class=\"text-primary text-center font-weight-bold\">{{'Marksheet Merit List' | translate}}</h3>\r\n        </div>\r\n      </div>\r\n\r\n       <div style=\"margin-left: 87%;\" class=\"pb-2\">\r\n\r\n        <a href=\"http://localhost:8084/Jasper/report\" class=\"btn btn-lg btn-primary \" role=\"button\"  target=\"blank\">\r\n          <span class=\"fa fa-print mr-1\"></span>{{'Print' | translate}}</a>\r\n      </div> \r\n\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-striped table-hover font-weight-bold grad\">\r\n            <thead class=\"thead-light text-uppercase\">\r\n              <tr>\r\n              <th >{{'S.No' | translate}}</th>\r\n\t\t\t\t\t\t\t<th >{{'RollNO' | translate}}  </th>\r\n\t\t\t\t\t\t\t<th >{{'Name' | translate}}</th>\r\n\t\t\t\t\t\t\t<th >{{'Physics' | translate}}</th>\r\n\t\t\t\t\t\t\t<th >{{'Chemistry' | translate}}</th>\r\n\t\t\t\t\t\t\t<th >{{'Maths' | translate}}</th>\r\n\t\t\t\t\t\t\t<th >{{'Total' | translate}}</th>\r\n\t\t\t\t\t\t\t<th >{{'Percentage(%)' | translate}}</th>\r\n\t\t\t\t\t\t</tr>\r\n          </thead>\r\n\r\n          <tbody>\r\n\t\t\t\t\t\t<tr *ngFor=\"let m of form.list; let i = index\" >\r\n\t\t\t\t\t\t\t<td>{{(form.pageNo*5)+i+ 1}} </td>\r\n\t\t\t\t\t\t\t<td >{{m.rollNo}}</td>\r\n\t\t\t\t\t\t\t<td >{{m.name}}</td>\r\n\t\t\t\t\t\t\t<td >{{m.physics}}</td>\r\n              <td> {{m.chemistry}}</td>\r\n              <td> {{m.maths}}</td>\r\n              <td>{{m.physics+m.maths+m.chemistry}}</td>\r\n              <td>{{((m.physics+m.maths+m.chemistry)*100)/300 | number:'2.0-2' }}%</td>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t</tr>\r\n          </tbody>\r\n          </table>\r\n      </div>\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div><app-footer>\r\n  \r\n</app-footer>"

/***/ }),

/***/ "./src/app/marksheet/marksheetmerit-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/marksheet/marksheetmerit-list.component.ts ***!
  \************************************************************/
/*! exports provided: MarksheetmeritListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarksheetmeritListComponent", function() { return MarksheetmeritListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");






var MarksheetmeritListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MarksheetmeritListComponent, _super);
    function MarksheetmeritListComponent(locator, route, httpservice) {
        var _this = _super.call(this, locator.endpoints.Marksheet, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpservice = httpservice;
        return _this;
    }
    MarksheetmeritListComponent.prototype.ngOnInit = function () {
        this.getMeritList();
    };
    MarksheetmeritListComponent.prototype.getMeritList = function () {
        var _self = this;
        this.httpservice.get("http://localhost:8084/Marksheet/meritlist", function (res) {
            if (res.success) {
                _self.form.list = res.result.list;
                if (_self.form.list.length == 0) {
                    _self.form.message = "No record found";
                    _self.form.error = true;
                }
                console.log("List Size", _self.form.list.length);
            }
            else {
                _self.form.error = false;
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    MarksheetmeritListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-marksheetmerit-list',
            template: __webpack_require__(/*! ./marksheetmerit-list.component.html */ "./src/app/marksheet/marksheetmerit-list.component.html"),
            styles: [__webpack_require__(/*! ./marksheet.component.css */ "./src/app/marksheet/marksheet.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"]])
    ], MarksheetmeritListComponent);
    return MarksheetmeritListComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseCtl"]));



/***/ }),

/***/ "./src/app/message/message-list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/message/message-list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"content-wrapper\" style=\"padding-top: 3%; padding-bottom: 15%; background-image: url(../../assets/files/gettyimages-1132439283-640x640.jpg); background-repeat: no-repeat, repeat;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\" style=\"height: 50px;\">\r\n        <div class=\"col-sm-6 p-1\">\r\n          <h4 class=\"text-primary font-weight-bold\">{{'Message List' | translate}}</h4>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row p-1\">\r\n\r\n        <div class=\"col-sm-3\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.subject\"\r\n            placeholder=\"{{'Search Subject' | translate}}\">\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.body\"\r\n            placeholder=\"{{'Search Body' | translate}}\">\r\n        </div>\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\r\n            {{'Search' | translate}}</button></div>\r\n        <div class=\"col=sm-1\">\r\n          <button (click)=\"forward('/message')\" type=\"button\" class=\"btn btn-success\">{{'Add Message'| translate}}\r\n          </button></div>\r\n\r\n      </div>\r\n\r\n      <div class=\"row p-1\">\r\n        <div class=\"col-lg-1\">\r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous'| translate}}\r\n          </button>\r\n        </div>\r\n        <div class=\"col-lg-1\">\r\n          <button (click)=\"next()\" class=\"btn btn-info\">{{'Next'| translate}} </button>\r\n        </div>\r\n        <div class=\"col-lg-2\">\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-striped table-hover\">\r\n            <thead class=\"thead-light text-uppercase\">\r\n              <tr>\r\n                <th>{{'S.No'| translate}}</th>\r\n                <th>{{'Code'| translate}}</th>\r\n                <th>{{'Subject' | translate}}</th>\r\n                <th>{{'Body'| translate}}</th>\r\n                <th>{{'Type'| translate}}</th>\r\n                <th>{{'Status'| translate}}</th>\r\n                <th>#</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let m of form.list; let i = index\">\r\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\r\n                <td> {{ m.code }} </td>\r\n                <td> {{ m.subject }} </td>\r\n                <td> {{ m.body }} </td>\r\n                <td> {{ m.type }} </td>\r\n                <td> {{ m.status }} </td>\r\n                <td>\r\n                  <a (click)=\"forward( '/message/' +  m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-edit text-info\"></i>\r\n                  </a>\r\n                  /\r\n                  <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-trash text-danger\"></i>\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/message/message-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/message/message-list.component.ts ***!
  \***************************************************/
/*! exports provided: MessageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageListComponent", function() { return MessageListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");





var MessageListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MessageListComponent, _super);
    function MessageListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.MESSAGE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    MessageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-message-list',
            template: __webpack_require__(/*! ./message-list.component.html */ "./src/app/message/message-list.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/message/message.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MessageListComponent);
    return MessageListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/message/message.component.css":
/*!***********************************************!*\
  !*** ./src/app/message/message.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertRedColor {\r\n    color: red;\r\n}\r\n\r\n\r\n.required-field::after { \t\t\r\n  content: \"*\";\t\t\r\n  color: red;\t\t\r\n   }\r\n\r\n\r\n.successColor{\r\n    color: green;\r\n   }\r\n\r\n\r\n.btn-space {\r\n    margin-right: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7OztBQUdBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7R0FDVDs7O0FBRUE7SUFDQyxZQUFZO0dBQ2I7OztBQUVBO0lBQ0MsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnRSZWRDb2xvciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG5cclxuLnJlcXVpcmVkLWZpZWxkOjphZnRlciB7IFx0XHRcclxuICBjb250ZW50OiBcIipcIjtcdFx0XHJcbiAgY29sb3I6IHJlZDtcdFx0XHJcbiAgIH1cdFxyXG5cclxuICAgLnN1Y2Nlc3NDb2xvcntcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgfVxyXG5cclxuICAgLmJ0bi1zcGFjZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/message/message.component.html":
/*!************************************************!*\
  !*** ./src/app/message/message.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:3%; background-image: url(../../assets/files/gettyimages-1132439283-640x640.jpg);\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg\">\r\n        <form>\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Add Message' | translate}}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Update Message' | translate}} </h2>\r\n\r\n\r\n          <!-- <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div> -->\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Type' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-comment grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"type\" [(ngModel)]=\"form.data.type\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Message Type' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.type}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Code' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-commenting grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"code\" id=\"code\" [(ngModel)]=\"form.data.code\"\r\n                  style=\"cursor: pointer;\">\r\n                  <option selected=\"true\">{{'Please select'  | translate }}</option>\r\n                  <option value=\"U-FP\">U-FP </option>\r\n                  <option value=\"U-REG\">U-REG </option>\r\n                  <option value=\"U-CP\">U-CP</option>\r\n                </select>\r\n\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\">{{form.inputerror.code}}</span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Subject' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-comments grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"subject\" [(ngModel)]=\"form.data.subject\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Message Subject'| translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.subject}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Body' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"body\" [(ngModel)]=\"form.data.body\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Message Body' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.body}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Status' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-flag grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"status\" [(ngModel)]=\"form.data.status\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Message Status' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.status}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'HTML' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-venus grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"html\" [(ngModel)]=\"form.data.html\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Message HTML' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.html}} </span>\r\n          </div>\r\n\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\"  class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate}}</button>\r\n            </div>\r\n\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Update' | translate}}</button>\r\n            </div>\r\n\r\n            <div class=\"pt-2\">\r\n              <button (click)=\"forward('/messagelist')\" type=\"button\"\r\n                class=\"btn btn-warning mr-1\">{{'List' | translate}}\r\n              </button></div>\r\n          </div>\r\n        </form>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/message/message.component.ts":
/*!**********************************************!*\
  !*** ./src/app/message/message.component.ts ***!
  \**********************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");





var MessageComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MessageComponent, _super);
    function MessageComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.MESSAGE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    MessageComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.type);
        flag = flag && validator.isNotNullObject(form.code);
        flag = flag && validator.isNotNullObject(form.subject);
        flag = flag && validator.isNotNullObject(form.body);
        return flag;
    };
    MessageComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.code = data.code;
        form.type = data.type;
        form.subject = data.subject;
        form.body = data.body;
        form.status = data.status;
        form.html = data.html;
        console.log('Populated Form', form);
    };
    MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/message/message.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MessageComponent);
    return MessageComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseCtl"]));



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "navbar{\r\n    position: fixed;\r\n    top: 0px;\r\n    height: 40px;\r\n    width: 100%;\r\n    z-index: 1000;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUixZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXZiYXJ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style type=\"text/css\">\r\n  .raj {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n  }\r\n\r\n  .c1 {\r\n    color: rgb(235, 6, 6);\r\n  }\r\n</style>\r\n\r\n<div class=\"header\">\r\n  <nav *ngIf=\"!isLogin()\" class=\"navbar navbar-expand-lg raj\">\r\n    <div class=\"logo\">\r\n      <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">\r\n        <!-- <strong class=\"text-white\">Rays</strong> -->\r\n        <img src=\"assets\\files\\custom.png\" height=\"40px\" width=\"120px\">\r\n      </a>\r\n    </div>\r\n    <select #locale (change)='changeLocale(locale.value)' class=\"c1\">\r\n      <option value=\"en\">{{'Select Language' | translate }}</option>\r\n\r\n      <option value=\"en\" style=\"color: red;\">English</option>\r\n      <option value=\"hi\" style=\"color: red;\">{{'Hindi' | translate }}</option>\r\n    </select>\r\n\r\n\r\n    <button class=\"navbar-toggler navbar-light\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\r\n      aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\" style=\"font-size: 15px;\">\r\n      <ul class=\"navbar-nav ml-auto\" style=\"padding-right: 6.5%;\">\r\n\r\n        <li class=\"nav-item dropdown\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['myNav']\" id=\"navbarDropdown\"\r\n            role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            <font style=\"color: white;\">{{'Hi,Guest'| translate}}\r\n            </font>\r\n          </a>\r\n\r\n          <div class=\"dropdown-menu\" id=\"myNav\" aria-labelledby=\"navbarDropdown\">\r\n            <a class=\"dropdown-item\" [routerLink]=\"['/login']\"><i class=\"fa fa-user\"></i> &nbsp; &nbsp; &nbsp; {{'Log\r\n              in' | translate}}</a>\r\n            <a class=\"dropdown-item\" [routerLink]=\"['/signup']\"><i class=\" fa fa-users\"></i> &nbsp; {{'User\r\n              Registration' |\r\n              translate}}</a>\r\n          </div>\r\n        </li>\r\n        <li>\r\n\r\n        </li>\r\n      </ul>\r\n    </div>\r\n\r\n  </nav>\r\n</div>\r\n\r\n\r\n<nav *ngIf=\"isLogin()\" class=\"navbar navbar-expand-lg raj\">\r\n\r\n  <div class=\"logo\">\r\n    <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">\r\n      <!-- <strong class=\"text-white\">Rays</strong> -->\r\n      <img src=\"assets\\files\\custom.png\" height=\"40px\" width=\"120px\">\r\n    </a>\r\n  </div>\r\n  <!-- <strong class=\"text-white\">NCS Pvt Ltd</strong> -->\r\n\r\n\r\n  <select #locale (click)='changeLocale(locale.value)'>\r\n    <option value=\"en\">{{'Select Language' | translate }}</option>\r\n    <option value=\"en\">English</option>\r\n    <option value=\"hi\">{{'Hindi' | translate }}</option>\r\n  </select>\r\n\r\n\r\n  <button class=\"navbar-toggler navbar-light\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\r\n    aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n\r\n\r\n    <div class=\"col-sm-2\"></div>\r\n\r\n\r\n\r\n    <ul class=\"nav navbar-nav pl-2 \">\r\n\r\n\r\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px;\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\r\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white;\">{{'User' | translate}}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/user']\"><i class=\"fa fa-user\"></i> &nbsp; &nbsp;{{'Add User' |\r\n            translate}}</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/userlist']\"><i class=\"fa fa-list\"></i>&nbsp; {{'User List' |\r\n            translate}}</a>\r\n        </div>\r\n      </li>\r\n\r\n\r\n\r\n\r\n      <!--\r\n<li class=\"nav-item dropdown\" style=\"padding-left: 5px;\">\r\n  <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n    <font style=\"color: white;\">{{'Patient' | translate}}</font>\r\n  </a>\r\n  <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n    <a class=\"dropdown-item\" [routerLink]=\"['/patient']\">\r\n      <i class=\"fa fa-user\"></i> &nbsp; &nbsp;{{'Add patient' | translate}}\r\n    </a>\r\n    <a class=\"dropdown-item\" [routerLink]=\"['/patientlist']\">\r\n      <i class=\"fa fa-list\"></i>&nbsp; {{'patient List' | translate}}\r\n    </a>\r\n  </div>\r\n</li>\r\n\r\n<li class=\"nav-item dropdown\" style=\"padding-left: 5px;\">\r\n  <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n    <font style=\"color: white;\">{{'Supplier' | translate}}</font>\r\n  </a>\r\n  <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n    <a class=\"dropdown-item\" [routerLink]=\"['/supplier']\">\r\n      <i class=\"fa fa-user\"></i> &nbsp; &nbsp;{{'Add supplier' | translate}}\r\n    </a>\r\n    <a class=\"dropdown-item\" [routerLink]=\"['/supplierlist']\">\r\n      <i class=\"fa fa-list\"></i>&nbsp; {{'supplier List' | translate}}\r\n    </a>\r\n  </div>\r\n</li>  \r\n\r\n<li class=\"nav-item dropdown\" style=\"padding-left: 5px;\">\r\n  <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n    <font style=\"color: white;\">{{'Vehicle Tracking' | translate}}</font>\r\n  </a>\r\n  <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n    <a class=\"dropdown-item\" [routerLink]=\"['/vehicletracking']\">\r\n      <i class=\"fa fa-user\"></i> &nbsp; &nbsp;{{'Add vehicle tracking' | translate}}\r\n    </a>\r\n    <a class=\"dropdown-item\" [routerLink]=\"['/vehicletrackinglist']\">\r\n      <i class=\"fa fa-list\"></i>&nbsp; {{'vehicle tracking List' | translate}}\r\n    </a>\r\n  </div>\r\n</li>\r\n\r\n<li class=\"nav-item dropdown\" style=\"padding-left: 5px;\">\r\n  <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n    <font style=\"color: white;\">{{'Inventory' | translate}}</font>\r\n  </a>\r\n  <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n    <a class=\"dropdown-item\" [routerLink]=\"['/inventory']\">\r\n      <i class=\"fa fa-user\"></i> &nbsp; &nbsp;{{'Add inventory' | translate}}\r\n    </a>\r\n    <a class=\"dropdown-item\" [routerLink]=\"['/inventorylist']\">\r\n      <i class=\"fa fa-list\"></i>&nbsp; {{'inventory List' | translate}}\r\n    </a>\r\n  </div>\r\n</li>\r\n\r\n<li class=\"nav-item dropdown\" style=\"padding-left: 5px;\">\r\n  <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n    <font style=\"color: white;\">{{'Transportation' | translate}}</font>\r\n  </a>\r\n  <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n    <a class=\"dropdown-item\" [routerLink]=\"['/transportation']\">\r\n      <i class=\"fa fa-user\"></i> &nbsp; &nbsp;{{'Add transportation' | translate}}\r\n    </a>\r\n    <a class=\"dropdown-item\" [routerLink]=\"['/transportationlist']\">\r\n      <i class=\"fa fa-list\"></i>&nbsp; {{'transportation List' | translate}}\r\n    </a>\r\n  </div>\r\n</li>\r\n\r\n<li class=\"nav-item dropdown\" style=\"padding-left: 5px;\">\r\n  <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n    <font style=\"color: white;\">{{'Route' | translate}}</font>\r\n  </a>\r\n  <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n    <a class=\"dropdown-item\" [routerLink]=\"['/route']\">\r\n      <i class=\"fa fa-user\"></i> &nbsp; &nbsp;{{'Add route' | translate}}\r\n    </a>\r\n    <a class=\"dropdown-item\" [routerLink]=\"['/routelist']\">\r\n      <i class=\"fa fa-list\"></i>&nbsp; {{'route List' | translate}}\r\n    </a>\r\n  </div>\r\n</li>\r\n\r\n<li class=\"nav-item dropdown\" style=\"padding-left: 5px;\">\r\n  <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n    <font style=\"color: white;\">{{'Issue' | translate}}</font>\r\n  </a>\r\n  <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n    <a class=\"dropdown-item\" [routerLink]=\"['/issue']\">\r\n      <i class=\"fa fa-user\"></i> &nbsp; &nbsp;{{'Add issue' | translate}}\r\n    </a>\r\n    <a class=\"dropdown-item\" [routerLink]=\"['/issuelist']\">\r\n      <i class=\"fa fa-list\"></i>&nbsp; {{'issue List' | translate}}\r\n    </a>\r\n  </div>\r\n</li>\r\n\r\n<li class=\"nav-item dropdown\" style=\"padding-left: 5px;\">\r\n  <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n    <font style=\"color: white;\">{{'Employee' | translate}}</font>\r\n  </a>\r\n  <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n    <a class=\"dropdown-item\" [routerLink]=\"['/employee']\">\r\n      <i class=\"fa fa-user\"></i> &nbsp; &nbsp;{{'Add employee' | translate}}\r\n    </a>\r\n    <a class=\"dropdown-item\" [routerLink]=\"['/employeelist']\">\r\n      <i class=\"fa fa-list\"></i>&nbsp; {{'employee List' | translate}}\r\n    </a>\r\n  </div>\r\n</li>\r\n\r\n<li class=\"nav-item dropdown\" style=\"padding-left: 5px;\">\r\n  <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n    <font style=\"color: white;\">{{'Job' | translate}}</font>\r\n  </a>\r\n  <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n    <a class=\"dropdown-item\" [routerLink]=\"['/job']\">\r\n      <i class=\"fa fa-user\"></i> &nbsp; &nbsp;{{'Add job' | translate}}\r\n    </a>\r\n    <a class=\"dropdown-item\" [routerLink]=\"['/joblist']\">\r\n      <i class=\"fa fa-list\"></i>&nbsp; {{'job List' | translate}}\r\n    </a>\r\n  </div>\r\n</li>\r\n\r\n<li class=\"nav-item dropdown\" style=\"padding-left: 5px;\">\r\n  <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n    <font style=\"color: white;\">{{'Transactions' | translate}}</font>\r\n  </a>\r\n  <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n    <a class=\"dropdown-item\" [routerLink]=\"['/transactions']\">\r\n      <i class=\"fa fa-user\"></i> &nbsp; &nbsp;{{'Add Transactions' | translate}}\r\n    </a>\r\n    <a class=\"dropdown-item\" [routerLink]=\"['/transactionslist']\">\r\n      <i class=\"fa fa-list\"></i>&nbsp; {{'Transactions List' | translate}}\r\n    </a>\r\n  </div>\r\n</li>\r\n\r\n<li class=\"nav-item dropdown\" style=\"padding-left: 5px;\">\r\n  <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n    <font style=\"color: white;\">{{'Project' | translate}}</font>\r\n  </a>\r\n  <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n    <a class=\"dropdown-item\" [routerLink]=\"['/project']\">\r\n      <i class=\"fa fa-user\"></i> &nbsp; &nbsp;{{'Add project' | translate}}\r\n    </a>\r\n    <a class=\"dropdown-item\" [routerLink]=\"['/projectlist']\">\r\n      <i class=\"fa fa-list\"></i>&nbsp; {{'project List' | translate}}\r\n    </a>\r\n  </div>\r\n</li>\r\n\r\n<li class=\"nav-item dropdown\" style=\"padding-left: 5px;\">\r\n  <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n    <font style=\"color: white;\">{{'ATMs' | translate}}</font>\r\n  </a>\r\n  <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n    <a class=\"dropdown-item\" [routerLink]=\"['/atms']\">\r\n      <i class=\"fa fa-user\"></i> &nbsp; &nbsp;{{'Add ATMs' | translate}}\r\n    </a>\r\n    <a class=\"dropdown-item\" [routerLink]=\"['/atmslist']\">\r\n      <i class=\"fa fa-list\"></i>&nbsp; {{'ATMs List' | translate}}\r\n    </a>\r\n  </div>\r\n</li>\r\n\r\n<li class=\"nav-item dropdown\" style=\"padding-left: 5px;\">\r\n  <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n    <font style=\"color: white;\">{{'Customer' | translate}}</font>\r\n  </a>\r\n  <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n    <a class=\"dropdown-item\" [routerLink]=\"['/customer']\">\r\n      <i class=\"fa fa-user\"></i> &nbsp; &nbsp;{{'Add customer' | translate}}\r\n    </a>\r\n    <a class=\"dropdown-item\" [routerLink]=\"['/customerlist']\">\r\n      <i class=\"fa fa-list\"></i>&nbsp; {{'job list' | translate}}\r\n    </a>\r\n  </div>\r\n</li>\r\n\r\n<li class=\"nav-item dropdown\" style=\"padding-left: 5px;\">\r\n  <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n    <font style=\"color: white;\">{{'Company' | translate}}</font>\r\n  </a>\r\n  <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n    <a class=\"dropdown-item\" [routerLink]=\"['/company']\">\r\n      <i class=\"fa fa-user\"></i> &nbsp; &nbsp;{{'Add company' | translate}}\r\n    </a>\r\n    <a class=\"dropdown-item\" [routerLink]=\"['/companylist']\">\r\n      <i class=\"fa fa-list\"></i>&nbsp; {{'company List' | translate}}\r\n    </a>\r\n  </div>\r\n</li>\r\n-->\r\n\r\n\r\n\r\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px;\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\r\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white;\">{{'Order' | translate}}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/order']\"><i class=\"fa fa-user\"></i> &nbsp; &nbsp;{{'Add Order' |\r\n            translate}}</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/orderlist']\"><i class=\"fa fa-list\"></i>&nbsp; {{'Order List' |\r\n            translate}}</a>\r\n        </div>\r\n      </li>\r\n\r\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\r\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white;\">{{'Marksheet' | translate}}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/marksheet']\"><i class=\"fa fa-file\"></i> &nbsp; {{'Add Marksheet' |\r\n            translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/marksheetlist']\"><i class=\"fa fa-paste\"></i>\r\n            &nbsp;\r\n            {{'Marksheet List' | translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/marksheetmeritlist']\"><i\r\n              class=\" fa fa-list\"></i> &nbsp; {{'Marksheet Merit List' | translate}} </a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/getmarksheet']\"><i class=\"fa fa-copy\"></i> &nbsp; {{'Get Marksheet'\r\n            |\r\n            translate}}</a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\r\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white;\">{{'Role' | translate}}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/role']\"><i class=\"fa fa-user\"></i> &nbsp; &nbsp; {{'Add Role' |\r\n            translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/rolelist']\"><i class=\"fa fa-users\"></i> &nbsp;\r\n            {{'Role List' |\r\n            translate}}</a>\r\n        </div>\r\n      </li>\r\n\r\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\r\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white;\">{{'Product' | translate}}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/product']\"><i class=\"fa fa-user\"></i> &nbsp; &nbsp; {{'Add product'\r\n            |\r\n            translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/productlist']\"><i class=\"fa fa-users\"></i> &nbsp;\r\n            {{'Product List' |\r\n            translate}}</a>\r\n        </div>\r\n\r\n      </li>\r\n\r\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\r\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white;\">{{'College' | translate}}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/college']\"><i class=\"fa fa-university\"></i> &nbsp; {{'Add College' |\r\n            translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/collegelist']\"><i class=\"fa fa-building\"></i>\r\n            &nbsp;\r\n            {{'College List' | translate}} </a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\r\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white;\">{{'Course' | translate}}\r\n          </font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/course']\"><i class=\"fa fa-book\"></i> &nbsp; {{'Add Course' |\r\n            translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/courselist']\"><i class=\"fa fa-list\"></i> &nbsp;\r\n            {{'Course List'\r\n            | translate}} </a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\r\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white;\">{{'Student' | translate}}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/student']\"><i class=\"fa fa-user\"></i> &nbsp; {{'Add Student' |\r\n            translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/studentlist']\"><i class=\"fa fa-users\"></i> &nbsp;\r\n            {{'Student\r\n            List' | translate}}</a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\r\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white;\">{{'Faculty' | translate}}\r\n          </font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/faculty']\"><i class=\"fa fa-users\"></i> &nbsp; {{'Add Faculty' |\r\n            translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/facultylist']\"><i class=\" fa fa-list\"></i> &nbsp;\r\n            {{'Faculty\r\n            List' | translate}}</a>\r\n        </div>\r\n      </li>\r\n\r\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\r\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white;\">{{'TimeTable' | translate}}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/timetable']\"><i class=\"fa fa-clock-o\"></i> &nbsp; {{'Add TimeTable'\r\n            | translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/timetablelist']\"><i class=\"fa fa-list\"></i>\r\n            &nbsp;\r\n            {{'TimeTable List' | translate}}</a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\r\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white;\">{{'Subject' | translate}}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/subject']\"><i class=\"fa fa-calculator\"></i> &nbsp; {{'Add Subject' |\r\n            translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/subjectlist']\"> <i class=\"fa fa-list\"></i> &nbsp;\r\n            {{'Subject\r\n            List' | translate}}\r\n          </a>\r\n        </div>\r\n      </li>\r\n\r\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\r\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white;\">{{form.data.fname }} ({{form.data.role}})\r\n          </font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n\r\n          <a class=\"dropdown-item\" (click)=\"forward()\"><i class=\" fa fa-user-md\"></i> &nbsp; {{'My Profile' |\r\n            translate}}</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/changepassword']\"><i class=\" fa fa-key\"></i> &nbsp; {{'Change\r\n            Password' |\r\n            translate}}</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"\" (click)=\"goToLink()\"><i class=\"fa fa-file\"></i> &nbsp;{{'Java Doc' |\r\n            translate}}</a>\r\n\r\n          <a class=\"dropdown-item\" (click)=\"logout()\"><i class=\" fa fa-lock\"></i> &nbsp;&nbsp;{{'Log Out' |\r\n            translate}}</a>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n<div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(translate, route, httpService, myservice, servicelocator) {
        this.translate = translate;
        this.route = route;
        this.httpService = httpService;
        this.myservice = myservice;
        this.servicelocator = servicelocator;
        this.form = {
            error: false,
            message: null,
            firstName: null,
            data: { id: null, fname: null, lname: null, role: null, loginId: null },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
        };
        console.log('DefaultLang ' + localStorage.getItem("locale"));
        if (localStorage.getItem("locale") != null) {
            translate.setDefaultLang(localStorage.getItem("locale"));
        }
        else {
            translate.setDefaultLang("en");
        }
    }
    NavbarComponent.prototype.changeLocale = function (locale) {
        localStorage.setItem("locale", locale);
        this.translate.use(localStorage.getItem("locale"));
        console.log('Locale ' + locale);
    };
    NavbarComponent.prototype.ngOnInit = function () {
        // var _self = this;
        // this.httpService.get("http://localhost:8080/Auth/menu",function (res){
        //   if(res.success){
        //     _self.form.list = res.result.list;
        //   }else{
        //     _self.form.error = false;
        //     _self.form.message = res.result.message;
        //   }
        //   console.log('FORM', _self.form);
        // });
    };
    NavbarComponent.prototype.forward = function () {
        this.userid = localStorage.getItem("userid");
        console.log('UID---' + this.userid);
        this.servicelocator.forward("/user/" + this.userid);
    };
    NavbarComponent.prototype.isLogin = function () {
        var check = localStorage.getItem('fname');
        if (check != "null" && check != null) {
            this.form.data.fname = localStorage.getItem("fname");
            this.form.data.lname = localStorage.getItem("lname");
            this.form.data.loginId = localStorage.getItem("loginId");
            this.form.data.role = localStorage.getItem("role");
            // console.log('fname is ---->>>' + this.form.data.fname);
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.goToLink = function () {
        window.open('assets/doc/index.html', '_blank');
    };
    NavbarComponent.prototype.logout = function () {
        var _self = this;
        console.log('Logout', this.form);
        // let url = this.servicelocator.endpoints.getEndpoint(this.servicelocator.endpoints.AUTH, "logout");
        // this.servicelocator.httpService.post(url, this.form, function (res, error) {
        //   if (error) {
        //     alert(error);
        //     return;
        //   }
        //   _self.loginId = "null";
        //   localStorage.removeItem("token");
        //   localStorage.removeItem("fname");
        //   localStorage.removeItem("lname");
        //   localStorage.removeItem("loginId");
        //   localStorage.removeItem("role")
        //   console.log('After logout jsessionid---' +localStorage.getItem("JSESSIONID") + "  logout Pushpendra Singh Kushwah");
        //   this.form.message = "Logout Successfully";
        //   console.log(this.form.message);
        //  _self.servicelocator.router.navigateByUrl('/login/true');
        _self.httpService.get("http://localhost:8084/Auth/logout", function (res) {
            _self.servicelocator.router.navigateByUrl('/login/true');
            if (res.success) {
                localStorage.clear();
                _self.form.message = res.result.message;
                //     _self.form.list = res.result.data;
                //     localStorage.removeItem("JSESSIONID");
                //     _self.servicelocator.router.navigateByUrl('/login');
                //     if(_self.form.list.length == 0){
                //       _self.form.message = "No record found";
                //       _self.form.error = true;
                //     }
                //     console.log("List Size",_self.form.list.length );
                //   }else{
                //     _self.form.error = false;
                //     _self.form.message = res.result.message;
                //   }
                //   console.log('FORM', _self.form);
            }
            ;
        });
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/order/order.component.css":
/*!*******************************************!*\
  !*** ./src/app/order/order.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyL29yZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/order/order.component.html":
/*!********************************************!*\
  !*** ./src/app/order/order.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n\r\n  .input-group-addon {\r\n    box-shadow: 9px 8px 7px #001a33;\r\n  }\r\n\r\n  .required-field {\r\n    color: red;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .alertRedColor {\r\n    color: red;\r\n  }\r\n\r\n  .card-body {\r\n    padding: 2rem;\r\n  }\r\n\r\n  .input-group-text i {\r\n    width: 1.5rem;\r\n  }\r\n\r\n  .btn-primary,\r\n  .btn-success,\r\n  .btn-warning {\r\n    width: 100%;\r\n  }\r\n\r\n  .form-control {\r\n    height: calc(2.25rem + 2px);\r\n  }\r\n\r\n  .form-group {\r\n    margin-bottom: 1.5rem;\r\n  }\r\n\r\n  .input-group-prepend .input-group-text {\r\n    background-color: #e9ecef;\r\n    border: 1px solid #ced4da;\r\n  }\r\n\r\n  .input-group-prepend .input-group-text i {\r\n    color: #495057;\r\n  }\r\n\r\n  .row {\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n  }\r\n\r\n  .textarea-height {\r\n    height: 100px;\r\n  }\r\n\r\n  .card {\r\n    width: 100%;\r\n    /* Adjusted width to fill its container */\r\n    max-width: 600px;\r\n    /* Added max-width for a responsive design */\r\n    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);\r\n    /* Added box-shadow for a better look */\r\n    margin-bottom: 20px;\r\n    /* Added margin bottom for spacing */\r\n    margin: auto;\r\n    /* Centering the card horizontally */\r\n  }\r\n\r\n  .container-fluid {\r\n    min-height: 100vh;\r\n    padding: 2% 0;\r\n    background: url('assets/files/wall.jpg') no-repeat center center;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    /* Center content horizontally */\r\n    justify-content: space-between;\r\n    /* Ensure content spacing */\r\n  }\r\n\r\n  .content {\r\n    flex: 1;\r\n    /* Allows the content area to expand */\r\n    display: flex;\r\n    justify-content: center;\r\n    /* Center content horizontally */\r\n    align-items: center;\r\n    /* Center content vertically */\r\n    padding: 20px;\r\n    width: 100%;\r\n    /* Ensure content stretches */\r\n    max-width: 800px;\r\n    /* Adjusted max-width for content */\r\n  }\r\n\r\n  app-footer {\r\n    width: 100%;\r\n    flex-shrink: 0;\r\n    /* Prevents footer from shrinking */\r\n  }\r\n\r\n  form {\r\n    width: 100%;\r\n    /* Ensures form stretches to fit container */\r\n    max-width: 600px;\r\n    /* Adjust as needed for form width */\r\n  }\r\n\r\n  h2 {\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  .alert {\r\n    margin-bottom: 20px;\r\n  }\r\n</style>\r\n\r\n<div class=\"container-fluid\">\r\n  <div class=\"content\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body input-group-addon grad\">\r\n        <form name=\"userForm\">\r\n          <h2 *ngIf=\"!form.data.id\" class=\"text-primary font-weight-bold text-center\">{{ 'Add Order' | translate }}</h2>\r\n          <h2 *ngIf=\"form.data.id\" class=\"text-primary font-weight-bold text-center\">{{ 'Update Order' | translate }}\r\n          </h2>\r\n\r\n          <div *ngIf=\"!form.error && form.message\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{ form.message }}\r\n          </div>\r\n\r\n          <div *ngIf=\"form.error && form.message\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{ form.message }}\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label><b>{{ 'Customer' | translate }}</b><span class=\"required-field\">*</span></label>\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-flag grey-text\"></i></div>\r\n              </div>\r\n              <select class=\"form-control\" name=\"customerIdId\" [(ngModel)]=\"form.data.customerId\"\r\n                aria-label=\"ngSelected\">\r\n                <option [ngValue]=\"undefined\">{{ 'Select customer' | translate }}</option>\r\n                <option *ngFor=\"let obj of form.preload.customerList\" [value]=\"obj.key\">{{ obj.value }}</option>\r\n              </select>\r\n            </div>\r\n            <span *ngIf=\"form.inputerror.customerId\" class=\"alertRedColor\">{{form.inputerror.customerId}}</span>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label><b>{{ 'Product Name' | translate }}</b><span class=\"required-field\">*</span></label>\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-box grey-text\"></i></div>\r\n                <!-- Changed icon for product name -->\r\n              </div>\r\n              <input type=\"text\" name=\"productName\" [(ngModel)]=\"form.data.productName\" class=\"form-control\"\r\n                placeholder=\"{{ 'Enter productName' | translate }}\" (keypress)=\"validateProductName($event)\"\r\n                maxlength=\"20\" minlength=\"3\">\r\n            </div>\r\n            <span *ngIf=\"form.inputerror.productName\" class=\"alertRedColor\">{{ form.inputerror.productName}}</span>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label><b>{{ 'Quantity' | translate }}</b><span class=\"required-field\">*</span></label>\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-sort-numeric-up grey-text\"></i></div>\r\n                <!-- Changed icon for quantity -->\r\n              </div>\r\n              <input type=\"number\" name=\"quantity\" [(ngModel)]=\"form.data.quantity\" class=\"form-control\"\r\n                placeholder=\"{{ 'Enter quantity' | translate }}\" (keypress)=\"validateQuantity($event)\">\r\n            </div>\r\n            <span *ngIf=\"form.inputerror.quantity\" class=\"alertRedColor\">{{ form.inputerror.quantity}}</span>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label><b>{{ 'Order Date' | translate }}</b><span class=\"required-field\">*</span></label>\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-calendar-alt grey-text\"></i></div>\r\n              </div>\r\n              <input type=\"date\" name=\"orderDate\" [value]=\"form.data.orderDate | date:'yyyy-MM-dd'\"\r\n                (input)=\"form.data.orderDate=parseDate($event.target.value)\" class=\"form-control\" required />\r\n            </div>\r\n            <span *ngIf=\"form.inputerror.orderDate\" class=\"alertRedColor\">{{ form.inputerror.orderDate }}</span>\r\n          </div>\r\n\r\n          <div class=\"row pt-2 pb-3 justify-content-center\">\r\n            <div class=\"col-md-4\">\r\n              <button *ngIf=\"!form.data.id\" (click)=\"onUpload()\" class=\"btn btn-success\">{{ 'Save' | translate\r\n                }}</button>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <button *ngIf=\"form.data.id\" (click)=\"onUpload()\" class=\"btn btn-success\">{{ 'Update' | translate\r\n                }}</button>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <a class=\"btn btn-warning\" type=\"button\" [routerLink]=\"['/orderlist']\">{{ 'List' | translate }}</a>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/order/order.component.ts":
/*!******************************************!*\
  !*** ./src/app/order/order.component.ts ***!
  \******************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







var OrderComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](OrderComponent, _super);
    function OrderComponent(locator, formBuilder, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.ORDER, locator, route) || this;
        _this.locator = locator;
        _this.formBuilder = formBuilder;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.getKey = false;
        _this.selected = null;
        _this.userForm = null;
        return _this;
    }
    OrderComponent.prototype.submit = function () {
        var _self = this;
        console.log('in submit');
        console.log(this.form);
        console.log(this.form.data);
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {}; // Clear input errors here
            if (res.success) {
                _self.form.error = false; // Set error to false on success
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("----------Rahul----------.");
                // Clear form data if needed
                // _self.form.data = {};
            }
            else {
                _self.form.error = true;
                if (res.result.inputerror) {
                    _self.form.inputerror = res.result.inputerror;
                }
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    OrderComponent.prototype.submit1 = function () {
        var _self = this;
        console.log(this.form + "submit running start");
        console.log(this.form.data + "form data going to be submit");
        this.serviceLocator.httpService.post(this.api.search, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            _self.form.data.id = res.result.data;
            if (res.success) {
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("--------------------.");
            }
            else {
                _self.form.error = true;
                _self.form.inputerror = res.result.inputerror;
                _self.form.message = res.result.message;
            }
            _self.form.data.id = res.result.data;
            console.log('FORM', _self.form);
        });
    };
    OrderComponent.prototype.onUpload = function (userform) {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    OrderComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.customerId);
        console.log(form.customerId);
        flag = flag && validator.isNotNullObject(form.quantity);
        console.log(form.quantity);
        flag = flag && validator.isNotNullObject(form.productName);
        console.log(form.productName);
        flag = flag && validator.isNotNullObject(form.orderDate);
        console.log(form.orderDate);
        return flag;
    };
    OrderComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        console.log(form.id + 'populate form in shoppingcomponent');
        form.productName = data.productName;
        form.quantity = data.quantity;
        form.orderDate = data.orderDate;
        form.customerId = data.customerId;
    };
    OrderComponent.prototype.validateProductName = function (event) {
        var input = event.target;
        var pattern = /^[a-zA-Z]*$/;
        var currentValue = input.value;
        var key = event.key;
        if (!pattern.test(key)) {
            event.preventDefault();
        }
        // Ensure the total length is between 3 and 20
        if (currentValue.length + 1 > 20) {
            event.preventDefault();
        }
    };
    OrderComponent.prototype.validateQuantity = function (event) {
        var input = event.target;
        var pattern = /^[0-9]*$/;
        var key = event.key;
        // Allow numbers only
        if (!pattern.test(key)) {
            event.preventDefault();
        }
        // Ensure the value is between 1 and 1000
        var currentValue = input.value + key;
        if (parseInt(currentValue) > 1000) {
            event.preventDefault();
        }
    };
    OrderComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    OrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order',
            template: __webpack_require__(/*! ./order.component.html */ "./src/app/order/order.component.html"),
            styles: [__webpack_require__(/*! ./order.component.css */ "./src/app/order/order.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
    ], OrderComponent);
    return OrderComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseCtl"]));



/***/ }),

/***/ "./src/app/order/orderlist.component.css":
/*!***********************************************!*\
  !*** ./src/app/order/orderlist.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyL29yZGVybGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/order/orderlist.component.html":
/*!************************************************!*\
  !*** ./src/app/order/orderlist.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  #nnn {\r\n    background: none;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .panel-heading {\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .content-wrapper {\r\n    background: url(assets/files/wall.jpg) no-repeat center center;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    width: 100%;\r\n    min-height: 100vh;\r\n    padding: 20px;\r\n  }\r\n\r\n  .table-responsive {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .full-height {\r\n    height: 100vh;\r\n  }\r\n</style>\r\n\r\n<div class=\"content-wrapper full-height\">\r\n  <div class=\"container-fluid full-height\">\r\n    <div class=\"panel panel-primary full-height\">\r\n      <div class=\"panel-heading\">\r\n        <h1 class=\"text-primary font-weight-bold\">{{ 'Order List' | translate }}</h1>\r\n      </div>\r\n\r\n      <div class=\"row mt-3\">\r\n        <div class=\"col-md-3\">\r\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.searchParams.orderDate\"\r\n            (ngModelChange)=\"formatDate($event)\" placeholder=\"{{ 'Search order Date' | translate }}\">\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <input type=\"\" class=\"form-control\" [(ngModel)]=\"form.searchParams.quantity\"\r\n            (ngModelChange)=\"validateQuantity()\" (blur)=\"clearQuantityError()\"\r\n            placeholder=\"{{ 'Search quantity' | translate }}\">\r\n          <div *ngIf=\"form.inputerror.quantity\" class=\"text-danger\">{{ form.inputerror.quantity }}</div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.productName\"\r\n            (input)=\"validateProductName($event)\" (focus)=\"clearProductNameError()\"\r\n            placeholder=\"{{ 'Search productName' | translate }}\">\r\n          <div *ngIf=\"form.inputerror.productName\" class=\"text-danger\">{{ form.inputerror.productName }}</div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <select class=\"form-control\" name=\"customer\" [(ngModel)]=\"form.searchParams.customerId\"\r\n            aria-label=\"ngSelected\">\r\n            <option [ngValue]=\"null\">{{ 'Select Customer' | translate }}</option>\r\n            <option *ngFor=\"let obj of form.preload.customerList\" [ngValue]=\"obj.key\">{{ obj.value }}</option>\r\n          </select>\r\n        </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"row mt-3 justify-content-center\">\r\n          <div class=\"col-md-2\">\r\n            <button (click)=\"submit()\" class=\"btn btn-primary btn-block\">{{ 'Search' | translate }}</button>\r\n          </div>\r\n          <div class=\"col-md-2\">\r\n            <button (click)=\"forward('/order')\" type=\"button\" class=\"btn btn-success btn-block\">{{ 'Add Order' |\r\n              translate\r\n              }}</button>\r\n          </div>\r\n          <div class=\"col-md-2\">\r\n            <button (click)=\"deleteMany()\" class=\"btn btn-danger btn-block\">{{ 'Delete' | translate }}</button>\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"form.error || form.message\" class=\"row mt-3 justify-content-center\">\r\n          <div class=\"col-md-6\">\r\n            <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n              {{ form.message }}\r\n            </div>\r\n            <div *ngIf=\"!form.error && form.message\" class=\"alert alert-success alert-dismissible\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n              {{ form.message }}\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"table-responsive mt-3\">\r\n          <table class=\"table table-bordered table-hover font-weight-bold text-dark\">\r\n            <thead class=\"thead-dark text-uppercase\">\r\n              <tr align=\"center\">\r\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\"\r\n                    (change)=\"checkUncheckAll($event)\" /></th>\r\n                <th>{{ 'S.No' }}</th>\r\n                <th>{{ 'Quantity' }}</th>\r\n                <th>{{ 'product Name' }}</th>\r\n                <th>{{ 'Order Date' }}</th>\r\n                <th>{{ 'customer' }}</th>\r\n                <th>{{ 'Edit' }}</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n                <td><input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" [id]=\"m.id\" /></td>\r\n                <td>{{ (form.pageNo * 5) + i + 1 }}</td>\r\n                <td>{{ m.quantity }}</td>\r\n                <td>{{ m.productName }}</td>\r\n                <td>{{ convertToLocalDate(m.orderDate) }}</td>\r\n                <td>{{ m.customerName }}</td>\r\n                <td>\r\n                  <button class=\"fa fa-edit text-primary\" id=\"nnn\" (click)=\"forward('/order/' + m.id)\"></button>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n        <div class=\"d-flex justify-content-between mt-3\">\r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{ 'Previous' | translate\r\n            }}</button>\r\n          <div *ngIf=\"form.list.length == 0\">\r\n            <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/orderlist']\" (click)=\"exit()\">{{ 'Back' | translate }}</a>\r\n          </div>\r\n          <button (click)=\"next()\" [disabled]=\"nextList == 0\" class=\"btn btn-info\">{{ 'Next' | translate }}</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <app-footer></app-footer>"

/***/ }),

/***/ "./src/app/order/orderlist.component.ts":
/*!**********************************************!*\
  !*** ./src/app/order/orderlist.component.ts ***!
  \**********************************************/
/*! exports provided: OrderlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderlistComponent", function() { return OrderlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var OrderlistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](OrderlistComponent, _super);
    function OrderlistComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.ORDER, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.form = {
            error: false,
            message: null,
            preload: {
                customerList: [] // Initialize customer list
            },
            data: { id: null },
            inputerror: { quantity: '', productName: '' },
            searchParams: {
                quantity: '',
                date: '',
                customerId: null,
                productName: '',
                orderDate: ''
            },
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        return _this;
    }
    OrderlistComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    // Format date function
    OrderlistComponent.prototype.formatDate = function (event) {
        var selectedDate = new Date(event);
        var formattedDate = selectedDate.toISOString().split('T')[0];
        this.form.searchParams.date = formattedDate;
    };
    // Convert date to local format for display
    OrderlistComponent.prototype.convertToLocalDate = function (dateString) {
        var date = new Date(dateString);
        var options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return date.toLocaleDateString(undefined, options);
    };
    // Validate input for quantity field
    OrderlistComponent.prototype.validateQuantity = function () {
        var quantity = this.form.searchParams.quantity;
        if (quantity === null || isNaN(Number(quantity)) || Number(quantity) <= 0 || Number(quantity) > 1000) {
            this.form.inputerror.quantity = 'Invalid quantity. Please enter a number between 1 and 1000.';
        }
        else {
            this.form.inputerror.quantity = ''; // Clear error message if quantity is valid
        }
    };
    // Clear quantity input error message when field is cleared
    OrderlistComponent.prototype.clearQuantityError = function () {
        if (!this.form.searchParams.quantity) {
            this.form.inputerror.quantity = '';
        }
    };
    OrderlistComponent.prototype.validateProductName = function (event) {
        var value = event.target.value.trim();
        var regex = /^[a-zA-Z]{1,20}$/; // Alphabetic characters only, length between 3 and 20
        if (value === '') {
            this.form.inputerror.productName = null; // Clear the error message if the field is empty
        }
        else if (!regex.test(value)) {
            this.form.inputerror.productName = 'Product Name should contain only alphabetic characters and be between 3 to 20 characters long';
        }
        else {
            this.form.inputerror.productName = null;
            this.form.searchParams.productName = value;
        }
    };
    // Clear productName error on input field focus
    OrderlistComponent.prototype.clearProductNameError = function () {
        this.form.inputerror.productName = null;
    };
    // Submit method
    OrderlistComponent.prototype.submit = function () {
        // Reset page number before searching
        this.form.pageNo = 0;
        // Check if there are any input errors
        if (this.form.inputerror.quantity || this.form.inputerror.productName) {
            return; // Do not proceed with search if there are errors
        }
        // Call the search method after formatting the date
        this.search();
    };
    // Search method
    OrderlistComponent.prototype.search = function () {
        // Clear previous search message
        this.form.searchMessage = null;
        // Perform the search operation with the search parameters
        _super.prototype.search.call(this);
    };
    OrderlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orderlist',
            template: __webpack_require__(/*! ./orderlist.component.html */ "./src/app/order/orderlist.component.html"),
            styles: [__webpack_require__(/*! ./orderlist.component.css */ "./src/app/order/orderlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], OrderlistComponent);
    return OrderlistComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/patient/patient.component.css":
/*!***********************************************!*\
  !*** ./src/app/patient/patient.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQvcGF0aWVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/patient/patient.component.html":
/*!************************************************!*\
  !*** ./src/app/patient/patient.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n\r\n  .input-group-addon {\r\n    box-shadow: 9px 8px 7px #001a33;\r\n  }\r\n\r\n  .required-field {\r\n    color: red;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .alertRedColor {\r\n    color: red;\r\n  }\r\n\r\n  .card-body {\r\n    padding: 2rem;\r\n  }\r\n\r\n  .input-group-text i {\r\n    width: 1.5rem;\r\n  }\r\n\r\n  .btn-primary,\r\n  .btn-success,\r\n  .btn-warning {\r\n    width: 100%;\r\n  }\r\n\r\n  .form-control {\r\n    height: calc(2.25rem + 2px);\r\n  }\r\n\r\n  .form-group {\r\n    margin-bottom: 1.5rem;\r\n  }\r\n\r\n  .input-group-prepend .input-group-text {\r\n    background-color: #e9ecef;\r\n    border: 1px solid #ced4da;\r\n  }\r\n\r\n  .input-group-prepend .input-group-text i {\r\n    color: #495057;\r\n  }\r\n\r\n  .row {\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n  }\r\n\r\n  .textarea-height {\r\n    height: 100px;\r\n  }\r\n\r\n  .card {\r\n    margin: auto;\r\n    max-width: 500px;\r\n  }\r\n</style>\r\n\r\n<div class=\"container-fluid\"\r\n  style=\"padding: 2% 0; background: url('assets/files/wall.jpg') no-repeat center center; background-attachment: fixed; background-size: cover; width: 100%; height: auto;\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body input-group-addon grad\">\r\n          <form name=\"userForm\">\r\n            <h2 *ngIf=\"!form.data.id\" class=\"text-primary font-weight-bold text-center\">{{ 'Add Patient' |\r\n              translate }}\r\n            </h2>\r\n            <h2 *ngIf=\"form.data.id\" class=\"text-primary font-weight-bold text-center\">{{ 'Update Patient' |\r\n              translate }}\r\n            </h2>\r\n\r\n            <div *ngIf=\"!form.error && form.message\" class=\"alert alert-success alert-dismissible\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n              {{ form.message }}\r\n            </div>\r\n\r\n            <div *ngIf=\"form.error && form.message\" class=\"alert alert-danger alert-dismissible\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n              {{ form.message }}\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Disease' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-flag grey-text\"></i></div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"categoryId\" [(ngModel)]=\"form.data.diseaseId\"\r\n                  aria-label=\"ngSelected\">\r\n                  <option [ngValue]=\"undefined\">{{ 'Select disease' | translate }}</option>\r\n                  <option *ngFor=\"let obj of form.preload.diseaseList\" [value]=\"obj.key\">{{ obj.value }}</option>\r\n                </select>\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.diseaseId\" class=\"alertRedColor\">{{form.inputerror.diseaseId}}</span>\r\n            </div>\r\n\r\n           \r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Name' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fas fa-user\"></i></div>\r\n                </div>\r\n                <input type=\"text\" name=\"name\" [(ngModel)]=\"form.data.name\" class=\"form-control\" placeholder=\"{{ 'Enter name' | translate }}\" (keypress)=\"validateAlphabetInput($event)\">\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.name\" class=\"alertRedColor\">{{ form.inputerror.name }}</span>\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Mobile' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i></div>\r\n                </div>\r\n                <input type=\"text\" name=\"mobile\" [(ngModel)]=\"form.data.mobile\" class=\"form-control\"\r\n                  placeholder=\"{{ 'Enter Mobile' | translate }}\" maxlength=\"10\" (keypress)=\"validatePhone($event)\">\r\n\r\n\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.mobile\" class=\"alertRedColor\">{{ form.inputerror.mobile}}</span>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Date of Visit' | translate }}</b><span class=\"required-field\"></span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-calendar-alt grey-text\"></i></div>\r\n                </div>\r\n                <input type=\"date\" name=\"dateOfPurchase\" [value]=\"form.data.dateOfVisit | date:'yyyy-MM-dd'\"\r\n                  (input)=\"form.data.dateOfVisit=parseDate($event.target.value)\" class=\"form-control\" required />\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.dateOfVisit\" class=\"alertRedColor\">{{ form.inputerror.dateOfVisit\r\n                }}</span>\r\n            </div>\r\n\r\n\r\n            <div class=\"row pt-2 pb-3 justify-content-center\">\r\n              <div class=\"col-md-4\">\r\n                <button *ngIf=\"!form.data.id\" (click)=\"onUpload()\" class=\"btn btn-success\">{{ 'Save' | translate\r\n                  }}</button>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <button *ngIf=\"form.data.id\" (click)=\"onUpload()\" class=\"btn btn-success\">{{ 'Update' | translate\r\n                  }}</button>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <a class=\"btn btn-warning\" type=\"button\" [routerLink]=\"['/patientlist']\">{{ 'List' | translate\r\n                  }}</a>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/patient/patient.component.ts":
/*!**********************************************!*\
  !*** ./src/app/patient/patient.component.ts ***!
  \**********************************************/
/*! exports provided: PatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientComponent", function() { return PatientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var PatientComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PatientComponent, _super);
    function PatientComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.PATIENT, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.getKey = false;
        _this.selected = null;
        _this.userForm = null;
        return _this;
    }
    PatientComponent.prototype.submit = function () {
        var _self = this;
        console.log('in submit');
        console.log(this.form);
        console.log(this.form.data);
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {}; // Clear input errors here
            if (res.success) {
                _self.form.error = false; // Set error to false on success
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("----------Rahul----------.");
                // Clear form data if needed
                // _self.form.data = {};
            }
            else {
                _self.form.error = true;
                if (res.result.inputerror) {
                    _self.form.inputerror = res.result.inputerror;
                }
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    PatientComponent.prototype.submit1 = function () {
        var _self = this;
        console.log(this.form + "submit running start");
        console.log(this.form.data + "form data going to be submit");
        this.serviceLocator.httpService.post(this.api.search, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            _self.form.data.id = res.result.data;
            if (res.success) {
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("--------------------.");
            }
            else {
                _self.form.error = true;
                _self.form.inputerror = res.result.inputerror;
                _self.form.message = res.result.message;
            }
            _self.form.data.id = res.result.data;
            console.log('FORM', _self.form);
        });
    };
    PatientComponent.prototype.onUpload = function (userform) {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    PatientComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.diseaseId);
        console.log(form.diseaseId);
        flag = flag && validator.isNotNullObject(form.name);
        console.log(form.name);
        flag = flag && validator.isNotNullObject(form.mobile);
        console.log(form.mobile);
        flag = flag && validator.isNotNullObject(form.dateOfVisit);
        console.log(form.dateOfVisit);
        return flag;
    };
    PatientComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        console.log(form.id + 'populate form in shoppingcomponent');
        form.name = data.name;
        form.mobile = data.mobile;
        form.dateOfVisit = data.dateOfVisit;
        form.diseaseId = data.diseaseId;
    };
    PatientComponent.prototype.validatePhone = function (event) {
        var input = event.key;
        // Check if the input is a number or backspace
        if ((isNaN(Number(input)) && input !== 'Backspace') || (input === ' ')) {
            event.preventDefault();
        }
        // Limit the input to 10 characters
        if (this.form.data.phone && this.form.data.phone.length >= 10 && input !== 'Backspace') {
            event.preventDefault();
        }
    };
    PatientComponent.prototype.validateAlphabetInput = function (event) {
        var charCode = event.which || event.keyCode;
        var charStr = String.fromCharCode(charCode);
        // Regular expression to test if the character is a letter
        var letterRegex = /^[a-zA-Z\s]+$/;
        // Test if the input matches the allowed characters
        if (!letterRegex.test(charStr)) {
            event.preventDefault();
        }
        // Optionally, check the entire value against the name format regex
        var inputElement = event.target;
        var inputValue = inputElement.value + charStr; // Add the current character to the input value
        // Regex for valid name format "FirstName LastName"
        var nameRegex = /^[A-Z][a-z]+ [A-Z][a-z]+$/;
        // Check if the current value matches the valid name format
        if (!nameRegex.test(inputValue)) {
            // Handle invalid input (e.g., disable submit button, show error message)
            // Example:
            inputElement.classList.add('invalid'); // Apply CSS class for invalid input
        }
        else {
            inputElement.classList.remove('invalid'); // Remove invalid CSS class if format is valid
        }
    };
    PatientComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    PatientComponent.prototype.test = function () {
    };
    PatientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-patient',
            template: __webpack_require__(/*! ./patient.component.html */ "./src/app/patient/patient.component.html"),
            styles: [__webpack_require__(/*! ./patient.component.css */ "./src/app/patient/patient.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], PatientComponent);
    return PatientComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/patient/patientlist.component.css":
/*!***************************************************!*\
  !*** ./src/app/patient/patientlist.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQvcGF0aWVudGxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/patient/patientlist.component.html":
/*!****************************************************!*\
  !*** ./src/app/patient/patientlist.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  #nnn {\r\n    background: none;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .panel-heading {\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .search-inputs {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .search-inputs .form-control,\r\n  .search-inputs .btn {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .content-wrapper {\r\n    background: url(assets/files/wall.jpg) no-repeat center center;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    width: auto;\r\n    height: 105vh;\r\n    padding: 20px;\r\n  }\r\n\r\n  .table-responsive {\r\n    margin-top: 20px;\r\n  }\r\n</style>\r\n\r\n<div class=\"content-wrapper\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\">\r\n        <h1 class=\"text-primary font-weight-bold\">{{ 'Patient List' | translate }}</h1>\r\n      </div>\r\n\r\n      <div class=\"row search-inputs justify-content-center\">\r\n        <div class=\"col-md-3\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.name\"\r\n            placeholder=\"{{ 'Search name' | translate }}\">\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"form.searchParams.mobile\"\r\n            placeholder=\"{{ 'Search mobile' | translate }}\">\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.searchParams.dateOfVisit\"\r\n            (ngModelChange)=\"formatDate($event)\" placeholder=\"{{ 'Search dateOfVisit' | translate }}\">\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <select class=\"form-control\" name=\"diseaseId\" [(ngModel)]=\"form.searchParams.diseaseId\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{ 'Select disease' | translate }}</option>\r\n            <option *ngFor=\"let obj of form.preload.diseaseList\" [value]=\"obj.key\">{{ obj.value }}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row mt-2 justify-content-center\">\r\n        <div class=\"col-md-2\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary btn-block\">{{ 'Search' | translate }}</button>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <button (click)=\"forward('/patient')\" type=\"button\" class=\"btn btn-success btn-block\">{{ 'Add Patient' |\r\n            translate }}</button>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger btn-block\">{{ 'Delete' | translate }}</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"form.error || form.message\" class=\"row mt-2 justify-content-center\">\r\n        <div class=\"col-md-6\">\r\n          <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{ form.message }}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{ form.message }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-responsive mt-3\">\r\n        <table class=\"table table-bordered table-hover font-weight-bold text-dark\">\r\n          <thead class=\"thead-dark text-uppercase\">\r\n            <tr align=\"center\">\r\n              <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\"\r\n                  (change)=\"checkUncheckAll($event)\" /></th>\r\n              <th>{{ 'S.No' }}</th>\r\n              <th>{{ 'name' }}</th>\r\n              <th>{{ 'mobile' }}</th>\r\n              <th>{{ 'dateOfVisit' }}</th>\r\n              <th>{{ 'disease' }}</th>\r\n              <th>{{ 'Edit' }}</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n              <td><input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" [id]=\"m.id\" /></td>\r\n              <td>{{ (form.pageNo * 5) + i + 1 }}</td>\r\n              <td>{{ m.name }}</td>\r\n              <td>{{ m.mobile }}</td>\r\n              <td>{{ convertToLocalDate(m.dateOfVisit) }}</td>\r\n              <td>{{ m.diseaseName }}</td>\r\n              <td>\r\n                <button class=\"fa fa-edit text-primary\" id=\"nnn\" (click)=\"forward('/patient/' + m.id)\"></button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <div class=\"d-flex justify-content-between mt-3\">\r\n        <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{ 'Previous' | translate\r\n          }}</button>\r\n        <div *ngIf=\"form.list.length == 0\">\r\n          <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/patientlist']\" (click)=\"exit()\">{{ 'Back' |\r\n            translate }}</a>\r\n        </div>\r\n        <button (click)=\"next()\" [disabled]=\"nextList == 0\" class=\"btn btn-info\">{{ 'Next' | translate }}</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/patient/patientlist.component.ts":
/*!**************************************************!*\
  !*** ./src/app/patient/patientlist.component.ts ***!
  \**************************************************/
/*! exports provided: PatientlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientlistComponent", function() { return PatientlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var PatientlistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PatientlistComponent, _super);
    function PatientlistComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.PATIENT, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null },
            inputerror: {},
            searchParams: {
                date: '' // Initialize date field
            },
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        return _this;
    }
    PatientlistComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    // Format date function
    PatientlistComponent.prototype.formatDate = function (event) {
        var selectedDate = new Date(event);
        var formattedDate = selectedDate.toISOString().split('T')[0];
        this.form.searchParams.date = formattedDate;
    };
    // Convert date to local format for display
    PatientlistComponent.prototype.convertToLocalDate = function (dateString) {
        var date = new Date(dateString);
        // Format date to 'MM/DD/YYYY'
        var options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return date.toLocaleDateString(undefined, options);
    };
    // Submit method
    PatientlistComponent.prototype.submit = function () {
        // Reset page number before searching
        this.form.pageNo = 0;
        // Call the search method after formatting the date
        this.search();
    };
    // Search method
    PatientlistComponent.prototype.search = function () {
        // Clear previous search message
        this.form.searchMessage = null;
        // Perform the search operation with the search parameters
        _super.prototype.search.call(this);
    };
    PatientlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-patientlist',
            template: __webpack_require__(/*! ./patientlist.component.html */ "./src/app/patient/patientlist.component.html"),
            styles: [__webpack_require__(/*! ./patientlist.component.css */ "./src/app/patient/patientlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], PatientlistComponent);
    return PatientlistComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-navbar></app-navbar>\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168),\r\n        rgb(219, 231, 237));\r\n    background-repeat: no repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n</style>\r\n<div class=\"row \" style=\"padding-top: 7%; padding-bottom:15%;\r\nbackground: url(assets/files/wall.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add Product'\r\n            |\r\n            translate }}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Update\r\n            Product' |\r\n            translate }}</h2>\r\n\r\n\r\n          <!-- <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div> -->\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Name' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"name\" [(ngModel)]=\"form.data.name\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Product Name' | translate }}\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <span class=\"alertRedColor\">{{form.inputerror.name}}</span>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span><b>{{'Description' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text \"></i> </div>\r\n                </div>\r\n                <textarea name=\"description\" [(ngModel)]=\"form.data.description\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Description' | translate }}\"></textarea>\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\">{{form.inputerror.description}}</span>\r\n          </div>\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate }}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Update' | translate }}</button>\r\n            </div>\r\n\r\n            <div class=\"pl-3 pt-2\">\r\n              <button (click)=\"forward('/productlist')\" class=\"btn btn-md btn-warning\">\r\n                {{'List' | translate }}</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");





var ProductComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProductComponent, _super);
    function ProductComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.PRODUCT, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    ProductComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    ProductComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.name);
        flag = flag && validator.isNotNullObject(form.description);
        return flag;
    };
    ProductComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.name = data.name;
        form.description = data.description;
        form.status = data.status;
    };
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ProductComponent);
    return ProductComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseCtl"]));



/***/ }),

/***/ "./src/app/product/productlist.component.css":
/*!***************************************************!*\
  !*** ./src/app/product/productlist.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdGxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/product/productlist.component.html":
/*!****************************************************!*\
  !*** ./src/app/product/productlist.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"content-wrapper\" style=\"padding-top: 3%;padding-bottom: 15;\r\n background: url(assets/files/back1.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: 90vh;\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\" style=\"height: 50px;\">\r\n\r\n        <div class=\"text-center\">\r\n          <h1 class=\"text-primary font-weight-bold\">{{'Product List' | translate}}</h1>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row p-1\">\r\n        <div class=\"col-sm-1\"></div>\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.name\"\r\n            placeholder=\"{{'Search Name' | translate}}\">\r\n\r\n        </div>\r\n        <!-- <div class=\"col-sm-2\">\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.loginId\" placeholder=\"{{'Search Email' | translate}}\">\r\n                  </div> -->\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.description\"\r\n            placeholder=\"{{'Search Description' | translate}}\">\r\n\r\n        </div>\r\n\r\n        <div class=\"col-sm-2\">\r\n\r\n          <select class=\"form-control\" name=\"id\" [(ngModel)]=\"form.searchParams.id\" aria-label=\"ngSelected\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{' Select Product' | translate }}</option>\r\n            <option *ngFor=\"let obj of form.preload.productList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n          </select>\r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"col-sm-1 ml-3\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\r\n            {{'Search' | translate }}</button>\r\n        </div>\r\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n        <div class=\"col-lg-2 ml-4\">\r\n          <button (click)=\"forward('/product')\" type=\"button\" class=\"btn btn-success\">{{'Add Priority' | translate}}\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n            {{'Delete'| translate}}</button>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-striped table-hover font-weight-bold text-primary\">\r\n            <thead class=\"thead-light text-uppercase\">\r\n              <tr>\r\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\"\r\n                    (change)=\"checkUncheckAll($event)\" /></th>\r\n                <th>{{'S.No' | translate }}</th>\r\n                <th>{{'Name' | translate }}</th>\r\n                <th>{{'Description' | translate }}</th>\r\n                <th>{{'Edit' | translate}}</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let m of form.list; let i = index\">\r\n                <td> <input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" id=\"{{m.id}}\"\r\n                    value=\"{{isMasterSel}}\" />\r\n                </td>\r\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\r\n                <td> {{ m.name }} </td>\r\n                <td> {{ m.description }} </td>\r\n                <td>\r\n                  <a (click)=\"forward( '/product/' +  m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-edit text-info\"></i>\r\n                  </a>\r\n                  <!-- /\r\n                                    <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\r\n                                        <i class=\"fa fa-trash text-danger\"></i>\r\n                                    </a> -->\r\n                </td>\r\n\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <table style=\"width: 100%;\">\r\n          <tr>\r\n            <td style=\"width: 50%;\">\r\n              <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\r\n                }} </button>\r\n            </td>\r\n            <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\r\n            <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\">\r\n              <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/productlist']\" (click)=\"exit()\">{{'Back' |\r\n                translate}}</a>\r\n            </td>\r\n\r\n\r\n\r\n\r\n            <td><button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\r\n                translate }}</button></td>\r\n          </tr>\r\n        </table>\r\n\r\n\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/product/productlist.component.ts":
/*!**************************************************!*\
  !*** ./src/app/product/productlist.component.ts ***!
  \**************************************************/
/*! exports provided: ProductlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductlistComponent", function() { return ProductlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ProductlistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProductlistComponent, _super);
    function ProductlistComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.PRODUCT, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    ProductlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-productlist',
            template: __webpack_require__(/*! ./productlist.component.html */ "./src/app/product/productlist.component.html"),
            styles: [__webpack_require__(/*! ./productlist.component.css */ "./src/app/product/productlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ProductlistComponent);
    return ProductlistComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/productdetails/productdetails.component.css":
/*!*************************************************************!*\
  !*** ./src/app/productdetails/productdetails.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RkZXRhaWxzL3Byb2R1Y3RkZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/productdetails/productdetails.component.html":
/*!**************************************************************!*\
  !*** ./src/app/productdetails/productdetails.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n\r\n  .input-group-addon {\r\n    box-shadow: 9px 8px 7px #001a33;\r\n  }\r\n\r\n  .required-field {\r\n    color: red;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .alertRedColor {\r\n    color: red;\r\n  }\r\n\r\n  .card-body {\r\n    padding: 2rem;\r\n  }\r\n\r\n  .input-group-text i {\r\n    width: 1.5rem;\r\n  }\r\n\r\n  .btn-primary,\r\n  .btn-success,\r\n  .btn-warning {\r\n    width: 100%;\r\n  }\r\n\r\n  .form-control {\r\n    height: calc(2.25rem + 2px);\r\n  }\r\n\r\n  .form-group {\r\n    margin-bottom: 1.5rem;\r\n  }\r\n\r\n  .input-group-prepend .input-group-text {\r\n    background-color: #e9ecef;\r\n    border: 1px solid #ced4da;\r\n  }\r\n\r\n  .input-group-prepend .input-group-text i {\r\n    color: #495057;\r\n  }\r\n\r\n  .row {\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n  }\r\n\r\n  .textarea-height {\r\n    height: 100px;\r\n  }\r\n\r\n  .card {\r\n    margin: auto;\r\n    max-width: 500px;\r\n  }\r\n</style>\r\n\r\n<div class=\"container-fluid\"\r\n  style=\"padding: 2% 0; background: url('assets/files/wall.jpg') no-repeat center center; background-attachment: fixed; background-size: cover; width: 100%; height: auto;\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body input-group-addon grad\">\r\n          <form name=\"userForm\">\r\n            <h2 *ngIf=\"!form.data.id\" class=\"text-primary font-weight-bold text-center\">{{ 'Add Product Details' |\r\n              translate }}\r\n            </h2>\r\n            <h2 *ngIf=\"form.data.id\" class=\"text-primary font-weight-bold text-center\">{{ 'Update Product Details' |\r\n              translate }}\r\n            </h2>\r\n\r\n            <div *ngIf=\"!form.error && form.message\" class=\"alert alert-success alert-dismissible\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n              {{ form.message }}\r\n            </div>\r\n\r\n            <div *ngIf=\"form.error && form.message\" class=\"alert alert-danger alert-dismissible\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n              {{ form.message }}\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Category' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-flag grey-text\"></i></div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"categoryId\" [(ngModel)]=\"form.data.categoryId\"\r\n                  aria-label=\"ngSelected\">\r\n                  <option [ngValue]=\"undefined\">{{ 'Select Category' | translate }}</option>\r\n                  <option *ngFor=\"let obj of form.preload.categoryList\" [value]=\"obj.key\">{{ obj.value }}</option>\r\n                </select>\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.categoryId\" class=\"alertRedColor\">{{form.inputerror.categoryId}}</span>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Name' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-tag grey-text\"></i></div>\r\n                </div>\r\n                <input type=\"text\" name=\"name\" [(ngModel)]=\"form.data.name\" class=\"form-control\"\r\n                  placeholder=\"{{ 'Enter name' | translate }}\">\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.name\" class=\"alertRedColor\">{{form.inputerror.name}}</span>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Price' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-dollar-sign grey-text\"></i></div>\r\n                </div>\r\n                <input type=\"number\" name=\"price\" [(ngModel)]=\"form.data.price\" class=\"form-control\"\r\n                  placeholder=\"{{ 'Enter Price' | translate }}\">\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.price\" class=\"alertRedColor\">{{ 'price' | translate }}</span>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Date of Purchase' | translate }}</b><span class=\"required-field\"></span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-calendar-alt grey-text\"></i></div>\r\n                </div>\r\n                <input type=\"date\" name=\"dateOfPurchase\" [value]=\"form.data.dateOfPurchase | date:'yyyy-MM-dd'\"\r\n                  (input)=\"form.data.dateOfPurchase=parseDate($event.target.value)\" class=\"form-control\" required />\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.dateOfPurchase\" class=\"alertRedColor\">{{ 'dateOfPurchase' | translate\r\n                }}</span>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Description' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text\"></i></div>\r\n                </div>\r\n                <textarea name=\"description\" [(ngModel)]=\"form.data.description\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Description' | translate }}\"></textarea>\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.description\" class=\"alertRedColor\">{{form.inputerror.description}}</span>\r\n            </div>\r\n\r\n            <div class=\"row pt-2 pb-3 justify-content-center\">\r\n              <div class=\"col-md-4\">\r\n                <button *ngIf=\"!form.data.id\" (click)=\"onUpload()\" class=\"btn btn-success\">{{ 'Save' | translate\r\n                  }}</button>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <button *ngIf=\"form.data.id\" (click)=\"onUpload()\" class=\"btn btn-success\">{{ 'Update' | translate\r\n                  }}</button>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <a class=\"btn btn-warning\" type=\"button\" [routerLink]=\"['/productdetailslist']\">{{ 'List' | translate\r\n                  }}</a>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/productdetails/productdetails.component.ts":
/*!************************************************************!*\
  !*** ./src/app/productdetails/productdetails.component.ts ***!
  \************************************************************/
/*! exports provided: ProductdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductdetailsComponent", function() { return ProductdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var ProductdetailsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProductdetailsComponent, _super);
    function ProductdetailsComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.PRODUCTDETAILS, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.getKey = false;
        _this.selected = null;
        _this.userForm = null;
        return _this;
    }
    ProductdetailsComponent.prototype.submit = function () {
        var _self = this;
        console.log('in submit');
        console.log(this.form);
        console.log(this.form.data);
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.data.id = res.result.data;
            if (res.success) {
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("----------Rahul----------.");
            }
            else {
                _self.form.error = true;
                if (res.result.inputerror) {
                    _self.form.inputerror = res.result.inputerror;
                }
                _self.form.message = res.result.message;
            }
            _self.form.data.id = res.result.data;
            console.log('FORM', _self.form);
        });
    };
    ProductdetailsComponent.prototype.submit1 = function () {
        var _self = this;
        console.log(this.form + "submit running start");
        console.log(this.form.data + "form data going to be submit");
        this.serviceLocator.httpService.post(this.api.search, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            _self.form.data.id = res.result.data;
            if (res.success) {
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("--------------------.");
            }
            else {
                _self.form.error = true;
                _self.form.inputerror = res.result.inputerror;
                _self.form.message = res.result.message;
            }
            _self.form.data.id = res.result.data;
            console.log('FORM', _self.form);
        });
    };
    ProductdetailsComponent.prototype.onUpload = function (userform) {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    ProductdetailsComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.categoryId);
        console.log(form.categoryId);
        flag = flag && validator.isNotNullObject(form.name);
        console.log(form.name);
        flag = flag && validator.isNotNullObject(form.price);
        console.log(form.price);
        flag = flag && validator.isNotNullObject(form.dateOfPurchase);
        console.log(form.dateOfPurchase);
        flag = flag && validator.isNotNullObject(form.description);
        console.log(form.description);
        return flag;
    };
    ProductdetailsComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        console.log(form.id + 'populate form in shoppingcomponent');
        form.name = data.name;
        form.price = data.price;
        form.dateOfPurchase = data.dateOfPurchase;
        form.description = data.description;
        form.categoryId = data.categoryId;
    };
    ProductdetailsComponent.prototype.validatePhone = function (event) {
        var input = event.key;
        // Check if the input is a number or backspace
        if ((isNaN(Number(input)) && input !== 'Backspace') || (input === ' ')) {
            event.preventDefault();
        }
        // Limit the input to 10 characters
        if (this.form.data.phone && this.form.data.phone.length >= 10 && input !== 'Backspace') {
            event.preventDefault();
        }
    };
    ProductdetailsComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    ProductdetailsComponent.prototype.test = function () {
    };
    ProductdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-productdetails',
            template: __webpack_require__(/*! ./productdetails.component.html */ "./src/app/productdetails/productdetails.component.html"),
            styles: [__webpack_require__(/*! ./productdetails.component.css */ "./src/app/productdetails/productdetails.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], ProductdetailsComponent);
    return ProductdetailsComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/productdetails/productdetailslist.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/productdetails/productdetailslist.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RkZXRhaWxzL3Byb2R1Y3RkZXRhaWxzbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/productdetails/productdetailslist.component.html":
/*!******************************************************************!*\
  !*** ./src/app/productdetails/productdetailslist.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  #nnn {\r\n    background: none;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .panel-heading {\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .search-inputs {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .search-inputs .form-control,\r\n  .search-inputs .btn {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .content-wrapper {\r\n    background: url(assets/files/wall.jpg) no-repeat center center;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    width: auto;\r\n    height: 105vh;\r\n    padding: 20px;\r\n  }\r\n\r\n  .table-responsive {\r\n    margin-top: 20px;\r\n  }\r\n</style>\r\n\r\n<div class=\"content-wrapper\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\">\r\n        <h1 class=\"text-primary font-weight-bold\">{{ 'Product Details List' | translate }}</h1>\r\n      </div>\r\n\r\n      <div class=\"row search-inputs p-1 justify-content-center\">\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.name\"\r\n            placeholder=\"{{ 'Search name' | translate }}\">\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"form.searchParams.price\"\r\n            placeholder=\"{{ 'Search price' | translate }}\">\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.description\"\r\n            placeholder=\"{{ 'Search description' | translate }}\">\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.searchParams.dateOfPurchase\"\r\n            (ngModelChange)=\"formatDate($event)\" placeholder=\"{{ 'Search dateOfPurchase' | translate }}\">\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n          <select class=\"form-control\" name=\"categoryId\" [(ngModel)]=\"form.searchParams.categoryId\"\r\n            aria-label=\"ngSelected\">\r\n            <option [ngValue]=\"null\" value=\"\">{{ 'Select category' | translate }}</option>\r\n            <option *ngFor=\"let obj of form.preload.categoryList\" [value]=\"obj.key\">{{ obj.value }}</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary\">{{ 'Search' | translate }}</button>\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n          <button (click)=\"forward('/productdetails')\" type=\"button\" class=\"btn btn-success\">{{ 'Add Product Details' |\r\n            translate }}</button>\r\n        </div>\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">{{ 'Delete' | translate }}</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{ form.message }}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{ form.message }}\r\n      </div>\r\n\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-bordered table-hover font-weight-bold text-dark\">\r\n          <thead class=\"thead-dark text-uppercase\">\r\n            <tr align=\"center\">\r\n              <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\"\r\n                  (change)=\"checkUncheckAll($event)\" /></th>\r\n              <th>{{ 'S.No' | translate }}</th>\r\n              <th>{{ 'name' | translate }}</th>\r\n              <th>{{ 'price' | translate }}</th>\r\n              <th>{{ 'dateOfPurchase' | translate }}</th>\r\n              <th>{{ 'description' | translate }}</th>\r\n              <th>{{ 'category' | translate }}</th>\r\n              <th>{{ 'Edit' | translate }}</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n              <td><input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" [id]=\"m.id\" /></td>\r\n              <td>{{ (form.pageNo * 5) + i + 1 }}</td>\r\n              <td>{{ m.name }}</td>\r\n              <td>{{ m.price }}</td>\r\n              <td>{{ convertToLocalDate(m.dateOfPurchase) }}</td>\r\n              <td>{{ m.description }}</td>\r\n              <td>{{ m.categoryName }}</td>\r\n              <td>\r\n                <button class=\"fa fa-edit text-primary\" id=\"nnn\" (click)=\"forward('/productdetails/' + m.id)\"></button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n\r\n        <div class=\"d-flex justify-content-between mt-3\">\r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{ 'Previous' | translate\r\n            }}</button>\r\n          <div *ngIf=\"form.list.length == 0\">\r\n            <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/productdetailslist']\" (click)=\"exit()\">{{ 'Back' |\r\n              translate }}</a>\r\n          </div>\r\n          <button (click)=\"next()\" [disabled]=\"nextList == 0\" class=\"btn btn-info\">{{ 'Next' | translate }}</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/productdetails/productdetailslist.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/productdetails/productdetailslist.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductdetailslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductdetailslistComponent", function() { return ProductdetailslistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var ProductdetailslistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProductdetailslistComponent, _super);
    function ProductdetailslistComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.PRODUCTDETAILS, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null },
            inputerror: {},
            searchParams: {
                name: '',
                price: null,
                description: '',
                dateOfPurchase: '',
                categoryId: null,
                date: '' // Initialize date field
            },
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        return _this;
    }
    ProductdetailslistComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    // Format date function
    ProductdetailslistComponent.prototype.formatDate = function (event) {
        var selectedDate = new Date(event);
        var formattedDate = selectedDate.toISOString().split('T')[0];
        this.form.searchParams.date = formattedDate;
    };
    // Convert date to local format for display
    ProductdetailslistComponent.prototype.convertToLocalDate = function (dateString) {
        var date = new Date(dateString);
        // Format date to 'MM/DD/YYYY'
        var options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return date.toLocaleDateString(undefined, options);
    };
    // Submit method
    ProductdetailslistComponent.prototype.submit = function () {
        // Reset page number before searching
        this.form.pageNo = 0;
        // Call the search method after formatting the date
        this.search();
    };
    // Search method
    ProductdetailslistComponent.prototype.search = function () {
        // Clear previous search message
        this.form.searchMessage = null;
        // Perform the search operation with the search parameters
        _super.prototype.search.call(this);
    };
    ProductdetailslistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-productdetailslist',
            template: __webpack_require__(/*! ./productdetailslist.component.html */ "./src/app/productdetails/productdetailslist.component.html"),
            styles: [__webpack_require__(/*! ./productdetailslist.component.css */ "./src/app/productdetails/productdetailslist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], ProductdetailslistComponent);
    return ProductdetailslistComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/project/project.component.css":
/*!***********************************************!*\
  !*** ./src/app/project/project.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/project/project.component.html":
/*!************************************************!*\
  !*** ./src/app/project/project.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n\r\n  .input-group-addon {\r\n    box-shadow: 9px 8px 7px #001a33;\r\n  }\r\n\r\n  .required-field {\r\n    color: red;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .alertRedColor {\r\n    color: red;\r\n  }\r\n\r\n  .card-body {\r\n    padding: 2rem;\r\n  }\r\n\r\n  .input-group-text i {\r\n    width: 1.5rem;\r\n  }\r\n\r\n  .btn-primary,\r\n  .btn-success,\r\n  .btn-warning {\r\n    width: 100%;\r\n  }\r\n\r\n  .form-control {\r\n    height: calc(2.25rem + 2px);\r\n  }\r\n\r\n  .form-group {\r\n    margin-bottom: 1.5rem;\r\n  }\r\n\r\n  .input-group-prepend .input-group-text {\r\n    background-color: #e9ecef;\r\n    border: 1px solid #ced4da;\r\n  }\r\n\r\n  .input-group-prepend .input-group-text i {\r\n    color: #495057;\r\n  }\r\n\r\n  .row {\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n  }\r\n\r\n  .textarea-height {\r\n    height: 100px;\r\n  }\r\n\r\n  .card {\r\n    margin: auto;\r\n    max-width: 500px;\r\n  }\r\n</style>\r\n\r\n<div class=\"container-fluid\" style=\"padding: 2% 0; background: url('assets/files/wall.jpg') no-repeat center center; background-attachment: fixed; background-size: cover; width: 100%; height: auto;\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body input-group-addon grad\">\r\n          <form name=\"userForm\">\r\n            <h2 *ngIf=\"!form.data.id\" class=\"text-primary font-weight-bold text-center\">{{ 'Add Project' | translate }}</h2>\r\n            <h2 *ngIf=\"form.data.id\" class=\"text-primary font-weight-bold text-center\">{{ 'Update Project' | translate }}</h2>\r\n\r\n            <div *ngIf=\"!form.error && form.message == 'Data is saved'\" class=\"alert alert-success alert-dismissible\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n              {{ form.message }}\r\n            </div>\r\n\r\n            <div *ngIf=\"form.error && form.message\" class=\"alert alert-danger alert-dismissible\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n              {{ form.message }}\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Category' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fas fa-flag\"></i></div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"categoryId\" [(ngModel)]=\"form.data.categoryId\" aria-label=\"ngSelected\">\r\n                  <option [ngValue]=\"undefined\">{{ 'Select category' | translate }}</option>\r\n                  <option *ngFor=\"let obj of form.preload.categoryList\" [value]=\"obj.key\">{{ obj.value }}</option>\r\n                </select>\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.categoryId\" class=\"alertRedColor\">{{ form.inputerror.categoryId }}</span>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Name' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fas fa-user\"></i></div>\r\n                </div>\r\n                <input type=\"text\" name=\"name\" [(ngModel)]=\"form.data.name\" class=\"form-control\" placeholder=\"{{ 'Enter name' | translate }}\" (keypress)=\"validateAlphabetInput($event)\">\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.name\" class=\"alertRedColor\">{{ form.inputerror.name }}</span>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Version' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fas fa-money-bill-wave\"></i></div>\r\n                </div>\r\n                <input type=\"number\" name=\"version\" [(ngModel)]=\"form.data.version\" class=\"form-control\" placeholder=\"{{ 'Enter version' | translate }}\" (keypress)=\"validateNumberInput($event)\">\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.version\" class=\"alertRedColor\">{{ form.inputerror.version }}</span>\r\n            </div>\r\n            \r\n            \r\n            \r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Open Date' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></div>\r\n                </div>\r\n                <input type=\"date\" name=\"openDate\" [value]=\"form.data.openDate | date:'yyyy-MM-dd'\" (input)=\"form.data.openDate=parseDate($event.target.value)\" class=\"form-control\" required />\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.openDate\" class=\"alertRedColor\">{{ form.inputerror.openDate }}</span>\r\n            </div>\r\n\r\n            <div class=\"row pt-2 pb-3 justify-content-center\">\r\n              <div class=\"col-md-4\">\r\n                <button *ngIf=\"!form.data.id\" (click)=\"onUpload()\" class=\"btn btn-success\">{{ 'Save' | translate }}</button>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <button *ngIf=\"form.data.id\" (click)=\"onUpload()\" class=\"btn btn-success\">{{ 'Update' | translate }}</button>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <a class=\"btn btn-warning\" type=\"button\" [routerLink]=\"['/projectlist']\">{{ 'List' | translate }}</a>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/project/project.component.ts":
/*!**********************************************!*\
  !*** ./src/app/project/project.component.ts ***!
  \**********************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var ProjectComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProjectComponent, _super);
    function ProjectComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.PROJECT, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.getKey = false;
        _this.selected = null;
        _this.userForm = null;
        return _this;
    }
    ProjectComponent.prototype.submit = function () {
        var _self = this;
        console.log('in submit');
        console.log(this.form);
        console.log(this.form.data);
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {}; // Clear input errors here
            if (res.success) {
                _self.form.error = false; // Set error to false on success
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("----------Rahul----------.");
                // Clear form data if needed
                // _self.form.data = {};
            }
            else {
                _self.form.error = true;
                if (res.result.inputerror) {
                    _self.form.inputerror = res.result.inputerror;
                }
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    ProjectComponent.prototype.submit1 = function () {
        var _self = this;
        console.log(this.form + "submit running start");
        console.log(this.form.data + "form data going to be submit");
        this.serviceLocator.httpService.post(this.api.search, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            _self.form.data.id = res.result.data;
            if (res.success) {
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("--------------------.");
            }
            else {
                _self.form.error = true;
                _self.form.inputerror = res.result.inputerror;
                _self.form.message = res.result.message;
            }
            _self.form.data.id = res.result.data;
            console.log('FORM', _self.form);
        });
    };
    ProjectComponent.prototype.onUpload = function (userform) {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    ProjectComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.categoryId);
        console.log(form.categoryId);
        flag = flag && validator.isNotNullObject(form.name);
        console.log(form.name);
        flag = flag && validator.isNotNullObject(form.version);
        console.log(form.paymentTerm);
        flag = flag && validator.isNotNullObject(form.openDate);
        console.log(form.openDate);
        return flag;
    };
    ProjectComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        console.log(form.id + 'populate form in shoppingcomponent');
        form.name = data.name;
        form.version = data.version;
        form.openDate = data.openDate;
        form.categoryId = data.categoryId;
    };
    ProjectComponent.prototype.validatePhone = function (event) {
        var input = event.key;
        // Check if the input is a number or backspace
        if ((isNaN(Number(input)) && input !== 'Backspace') || (input === ' ')) {
            event.preventDefault();
        }
        // Limit the input to 10 characters
        if (this.form.data.phone && this.form.data.phone.length >= 10 && input !== 'Backspace') {
            event.preventDefault();
        }
    };
    ProjectComponent.prototype.validateNumberInput = function (event) {
        var charCode = event.which ? event.which : event.keyCode;
        var charStr = String.fromCharCode(charCode);
        // Allow only digits
        if (!/^\d$/.test(charStr)) {
            event.preventDefault();
        }
    };
    ProjectComponent.prototype.validateAlphabetInput = function (event) {
        var charCode = event.which || event.keyCode;
        var charStr = String.fromCharCode(charCode);
        // Regular expression to test if the character is a letter
        var letterRegex = /^[a-zA-Z\s]+$/;
        // Test if the input matches the allowed characters
        if (!letterRegex.test(charStr)) {
            event.preventDefault();
        }
        // Optionally, check the entire value against the name format regex
        var inputElement = event.target;
        var inputValue = inputElement.value + charStr; // Add the current character to the input value
        // Regex for valid name format "FirstName LastName"
        var nameRegex = /^[A-Z][a-z]+ [A-Z][a-z]+$/;
        // Check if the current value matches the valid name format
        if (!nameRegex.test(inputValue)) {
            // Handle invalid input (e.g., disable submit button, show error message)
            // Example:
            inputElement.classList.add('invalid'); // Apply CSS class for invalid input
        }
        else {
            inputElement.classList.remove('invalid'); // Remove invalid CSS class if format is valid
        }
    };
    ProjectComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    ProjectComponent.prototype.test = function () {
    };
    ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.css */ "./src/app/project/project.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], ProjectComponent);
    return ProjectComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/project/projectlist.component.css":
/*!***************************************************!*\
  !*** ./src/app/project/projectlist.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QvcHJvamVjdGxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/project/projectlist.component.html":
/*!****************************************************!*\
  !*** ./src/app/project/projectlist.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  /* Adjustments for panel heading and main content wrapper */\r\n  .panel-heading {\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-bottom: 20px; /* Added margin bottom for spacing */\r\n  }\r\n\r\n  .content-wrapper {\r\n    background: url(assets/files/wall.jpg) no-repeat center center;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    padding: 20px;\r\n    min-height: calc(100vh - 20px); /* Adjusted to ensure full height minus padding */\r\n    box-sizing: border-box; /* Ensures padding is included in height calculation */\r\n  }\r\n\r\n  .search-inputs {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px; /* Added margin bottom for spacing */\r\n  }\r\n\r\n  .search-inputs .form-control,\r\n  .search-inputs .btn {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .table-responsive {\r\n    margin-top: 20px;\r\n    overflow-x: auto; /* Ensures horizontal scroll if table overflows */\r\n  }\r\n</style>\r\n\r\n<div class=\"content-wrapper\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\">\r\n        <h1 class=\"text-primary font-weight-bold\">{{ 'Project List' | translate }}</h1>\r\n      </div>\r\n\r\n      <div class=\"row search-inputs justify-content-center\">\r\n        <div class=\"col-md-3\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.name\"\r\n            placeholder=\"{{ 'Search Name' | translate }}\" (input)=\"validateInput($event, 'name')\">\r\n          <div *ngIf=\"!isValidNameInput\" class=\"text-danger\">{{ nameErrorMessage }}</div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.searchParams.openDate\"\r\n            (ngModelChange)=\"formatDate($event)\" placeholder=\"{{ 'Search openDate' | translate }}\">\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"form.searchParams.version\"\r\n            placeholder=\"{{ 'Search version' | translate }}\">\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <select class=\"form-control\" name=\"categoryId\" [(ngModel)]=\"form.searchParams.categoryId\">\r\n            <option [ngValue]=\"undefined\">{{ 'Select category' | translate }}</option>\r\n            <option *ngFor=\"let obj of form.preload.categoryList\" [value]=\"obj.key\">{{ obj.value }}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row mt-2 justify-content-center\">\r\n        <div class=\"col-md-2\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary btn-block\">{{ 'Search' | translate }}</button>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <button (click)=\"forward('/project')\" type=\"button\" class=\"btn btn-success btn-block\">{{ 'Add project' | translate }}</button>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger btn-block\">{{ 'Delete' | translate }}</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"form.error || form.message\" class=\"row mt-2 justify-content-center\">\r\n        <div class=\"col-md-6\">\r\n          <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{ form.message }}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{ form.message }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-responsive mt-3\">\r\n        <table class=\"table table-bordered table-hover font-weight-bold text-dark\">\r\n          <thead class=\"thead-dark text-uppercase\">\r\n            <tr align=\"center\">\r\n              <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" (change)=\"checkUncheckAll($event)\" /></th>\r\n              <th>{{ 'S.No' }}</th>\r\n              <th>{{ 'Name' }}</th>\r\n              <th>{{ 'version' }}</th>\r\n              <th>{{ 'open Date' }}</th>\r\n              <th>{{ 'Category' }}</th>\r\n              <th>{{ 'Edit' }}</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n              <td><input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" [id]=\"m.id\" /></td>\r\n              <td>{{ (form.pageNo * 5) + i + 1 }}</td>\r\n              <td>{{ m.name }}</td>\r\n              <td>{{ m.version }}</td>\r\n              <td>{{ convertToLocalDate(m.openDate) }}</td>\r\n              <td>{{ m.categoryName }}</td>\r\n              <td>\r\n                <button class=\"fa fa-edit text-primary\" id=\"nnn\" (click)=\"forward('/project/' + m.id)\"></button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <div class=\"d-flex justify-content-between mt-3\">\r\n        <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{ 'Previous' | translate }}</button>\r\n        <div *ngIf=\"form.list.length == 0\">\r\n          <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/projectlist']\" (click)=\"exit()\">{{ 'Back' | translate }}</a>\r\n        </div>\r\n        <button (click)=\"next()\" [disabled]=\"nextList == 0\" class=\"btn btn-info\">{{ 'Next' | translate }}</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/project/projectlist.component.ts":
/*!**************************************************!*\
  !*** ./src/app/project/projectlist.component.ts ***!
  \**************************************************/
/*! exports provided: ProjectlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectlistComponent", function() { return ProjectlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var ProjectlistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProjectlistComponent, _super);
    function ProjectlistComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.PROJECT, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null },
            inputerror: {},
            searchParams: {
                name: '',
                version: '',
                opendate: '',
                categoryId: '',
                date: ''
            },
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        _this.isValidMobileInput = true;
        _this.isValidNameInput = true;
        _this.nameErrorMessage = '';
        _this.mobileErrorMessage = '';
        return _this;
    }
    ProjectlistComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    // Format date function
    ProjectlistComponent.prototype.formatDate = function (event) {
        var selectedDate = new Date(event);
        var formattedDate = selectedDate.toISOString().split('T')[0]; // Ensure it's in ISO format
        this.form.searchParams.date = formattedDate;
    };
    // Convert date to local format for display
    ProjectlistComponent.prototype.convertToLocalDate = function (dateString) {
        var date = new Date(dateString);
        // Format date to 'MM/DD/YYYY'
        var options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return date.toLocaleDateString(undefined, options);
    };
    // Validate input for name and mobile fields
    ProjectlistComponent.prototype.validateInput = function (event, field) {
        var value = event.target.value;
        if (field === 'mobile') {
            this.isValidMobileInput = /^[0-9]*$/.test(value); // Check if the input contains only numbers
            if (!this.isValidMobileInput) {
                this.mobileErrorMessage = 'Please type numbers only';
            }
            else {
                this.mobileErrorMessage = '';
            }
        }
        else if (field === 'name') {
            this.isValidNameInput = /^[A-Za-z\s]*$/.test(value); // Check if the input contains only letters and spaces
            if (!this.isValidNameInput) {
                this.nameErrorMessage = 'Please type alphabets only';
            }
            else {
                this.nameErrorMessage = '';
            }
        }
    };
    // Submit method
    ProjectlistComponent.prototype.submit = function () {
        // Reset page number before searching
        this.form.pageNo = 0;
        // Call the search method after formatting the date
        this.search();
    };
    // Search method
    ProjectlistComponent.prototype.search = function () {
        // Clear previous search message
        this.form.searchMessage = null;
        // Perform the search operation with the search parameters
        _super.prototype.search.call(this);
    };
    ProjectlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projectlist',
            template: __webpack_require__(/*! ./projectlist.component.html */ "./src/app/project/projectlist.component.html"),
            styles: [__webpack_require__(/*! ./projectlist.component.css */ "./src/app/project/projectlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], ProjectlistComponent);
    return ProjectlistComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/role/role-list.component.html":
/*!***********************************************!*\
  !*** ./src/app/role/role-list.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"content-wrapper\" style=\"padding-top: 3%;padding-bottom: 15;\r\n background: url(assets/files/back1.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: 90vh;\" >\r\n    <div class=\"container-fluid\">\r\n\r\n        <div class=\"panel panel-primary\">\r\n            <div class=\"panel-heading\" style=\"height: 50px;\">\r\n                \r\n                <div class=\"text-center\">\r\n                    <h1 class=\"text-primary font-weight-bold\">{{'Role List' | translate}}</h1>\r\n                  </div>\r\n                </div>\r\n          \r\n                <div class=\"row p-1\">\r\n                  <div class=\"col-sm-1\"></div>\r\n                  <div class=\"col-sm-2\">\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.name\"\r\n                      placeholder=\"{{'Search Name' | translate}}\">\r\n          \r\n                  </div>\r\n                  <!-- <div class=\"col-sm-2\">\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.loginId\" placeholder=\"{{'Search Email' | translate}}\">\r\n                  </div> -->\r\n                  <div class=\"col-sm-2\">\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.description\"\r\n                      placeholder=\"{{'Search Description' | translate}}\">\r\n          \r\n                  </div>\r\n\r\n                  <div class=\"col-sm-2\">\r\n\r\n                    <select class=\"form-control\" name=\"id\" [(ngModel)]=\"form.searchParams.id\" aria-label=\"ngSelected\">\r\n                      <option [ngValue]=\"\" value=\"undefined\">{{' Select Role' | translate }}</option>\r\n                      <option *ngFor=\"let obj of form.preload.roleList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n                    </select>\r\n                  </div>\r\n          \r\n                  \r\n                 \r\n                  <div class=\"col-sm-1 ml-3\">\r\n                    <button (click)=\"submit()\" class=\"btn btn-primary\">\r\n                      {{'Search' | translate }}</button>\r\n                  </div>\r\n                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                  <div class=\"col-lg-2 ml-4\">\r\n                    <button (click)=\"forward('/role')\" type=\"button\" class=\"btn btn-success\">{{'Add Role' | translate}}\r\n                    </button>\r\n                  </div>\r\n          \r\n                  <div class=\"col-sm-1\">\r\n                    <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n                      {{'Delete'| translate}}</button>\r\n                  </div>\r\n                </div>\r\n            <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n                {{form.message}}\r\n              </div>\r\n              <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n                {{form.message}}\r\n              </div>\r\n\r\n          \r\n\r\n            <div class=\"p-1\">\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-bordered table-striped table-hover font-weight-bold text-primary\">\r\n                        <thead class=\"thead-light text-uppercase\">\r\n                            <tr>\r\n                                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\" (change)=\"checkUncheckAll($event)\"/></th>\r\n                                <th>{{'S.No' | translate }}</th>\r\n                                <th>{{'Name' | translate }}</th>\r\n                                <th>{{'Description' | translate }}</th>\r\n                                <th>{{'Edit' | translate}}</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let m of form.list; let i = index\">\r\n                                <td> <input type=\"checkbox\"  #checkboxes (change)=\"checklistUpdate()\"  name=\"list_name\"  id=\"{{m.id}}\" value=\"{{isMasterSel}}\"/>\r\n                                </td>\r\n                                <td> {{(form.pageNo*5)+i+ 1}} </td>\r\n                                <td> {{ m.name }} </td>\r\n                                <td> {{ m.description }} </td>\r\n                                <td>\r\n                                    <a (click)=\"forward( '/role/' +  m.id)\" style=\"cursor: pointer;\">\r\n                                        <i class=\"fa fa-edit text-info\"></i>\r\n                                    </a>\r\n                                    <!-- /\r\n                                    <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\r\n                                        <i class=\"fa fa-trash text-danger\"></i>\r\n                                    </a> -->\r\n                                </td>\r\n                                \r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div><table style=\"width: 100%;\">\r\n                    <tr>\r\n                      <td style=\"width: 50%;\">\r\n                  <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\r\n                    }} </button></td>\r\n                    <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\r\n                    <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\">\r\n                      <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/rolelist']\" (click)=\"exit()\">{{'Back' | translate}}</a></td>\r\n        \r\n          \r\n          \r\n                \r\n                    <td><button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\r\n                      translate }}</button></td>\r\n                    </tr>\r\n                    </table>\r\n              \r\n                    \r\n               \r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/role/role-list.component.ts":
/*!*********************************************!*\
  !*** ./src/app/role/role-list.component.ts ***!
  \*********************************************/
/*! exports provided: RoleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleListComponent", function() { return RoleListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RoleListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RoleListComponent, _super);
    function RoleListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.ROLE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    RoleListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role-list',
            template: __webpack_require__(/*! ./role-list.component.html */ "./src/app/role/role-list.component.html"),
            styles: [__webpack_require__(/*! ./role.component.css */ "./src/app/role/role.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], RoleListComponent);
    return RoleListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/role/role.component.css":
/*!*****************************************!*\
  !*** ./src/app/role/role.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertRedColor {\r\n    color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZS9yb2xlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9yb2xlL3JvbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGVydFJlZENvbG9yIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/role/role.component.html":
/*!******************************************!*\
  !*** ./src/app/role/role.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168),\r\n        rgb(219, 231, 237));\r\n    background-repeat: no repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n</style>\r\n<div class=\"row \" style=\"padding-top: 7%; padding-bottom:15%;\r\nbackground: url(assets/files/wall.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add Role' |\r\n            translate }}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Update Role' |\r\n            translate }}</h2>\r\n\r\n\r\n          <!-- <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div> -->\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Name' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"name\" [(ngModel)]=\"form.data.name\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Role Name' | translate }}\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <span class=\"alertRedColor\">{{form.inputerror.name}}</span>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span><b>{{'Description' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text \"></i> </div>\r\n                </div>\r\n                <textarea name=\"description\" [(ngModel)]=\"form.data.description\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Description' | translate }}\"></textarea>\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\">{{form.inputerror.description}}</span>\r\n          </div>\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate }}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Update' | translate }}</button>\r\n            </div>\r\n\r\n            <div class=\"pl-3 pt-2\">\r\n              <button (click)=\"forward('/rolelist')\" class=\"btn btn-md btn-warning\">\r\n                {{'List' | translate }}</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/role/role.component.ts":
/*!****************************************!*\
  !*** ./src/app/role/role.component.ts ***!
  \****************************************/
/*! exports provided: RoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleComponent", function() { return RoleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");





var RoleComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RoleComponent, _super);
    function RoleComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.ROLE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    RoleComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    RoleComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.name);
        flag = flag && validator.isNotNullObject(form.description);
        return flag;
    };
    RoleComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.name = data.name;
        form.description = data.description;
        form.status = data.status;
    };
    RoleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role',
            template: __webpack_require__(/*! ./role.component.html */ "./src/app/role/role.component.html"),
            styles: [__webpack_require__(/*! ./role.component.css */ "./src/app/role/role.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], RoleComponent);
    return RoleComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseCtl"]));



/***/ }),

/***/ "./src/app/route/route.component.css":
/*!*******************************************!*\
  !*** ./src/app/route/route.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlL3JvdXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/route/route.component.html":
/*!********************************************!*\
  !*** ./src/app/route/route.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n\r\n  .input-group-addon {\r\n    box-shadow: 9px 8px 7px #001a33;\r\n  }\r\n\r\n  .required-field {\r\n    color: red;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .alertRedColor {\r\n    color: red;\r\n  }\r\n\r\n  .card-body {\r\n    padding: 2rem;\r\n  }\r\n\r\n  .input-group-text i {\r\n    width: 1.5rem;\r\n  }\r\n\r\n  .btn-primary,\r\n  .btn-success,\r\n  .btn-warning {\r\n    width: 100%;\r\n  }\r\n\r\n  .form-control {\r\n    height: calc(2.25rem + 2px);\r\n  }\r\n\r\n  .form-group {\r\n    margin-bottom: 1.5rem;\r\n  }\r\n\r\n  .input-group-prepend .input-group-text {\r\n    background-color: #e9ecef;\r\n    border: 1px solid #ced4da;\r\n  }\r\n\r\n  .input-group-prepend .input-group-text i {\r\n    color: #495057;\r\n  }\r\n\r\n  .row {\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n  }\r\n\r\n  .textarea-height {\r\n    height: 100px;\r\n  }\r\n\r\n  .card {\r\n    margin: auto;\r\n    max-width: 500px;\r\n  }\r\n</style>\r\n\r\n<div class=\"container-fluid\" style=\"padding: 2% 0; background: url('assets/files/wall.jpg') no-repeat center center; background-attachment: fixed; background-size: cover; width: 100%; height: auto;\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body input-group-addon grad\">\r\n          <form name=\"userForm\">\r\n            <h2 *ngIf=\"!form.data.id\" class=\"text-primary font-weight-bold text-center\">{{ 'Add Route' | translate }}</h2>\r\n            <h2 *ngIf=\"form.data.id\" class=\"text-primary font-weight-bold text-center\">{{ 'Update Route' | translate }}</h2>\r\n\r\n            <div *ngIf=\"!form.error && form.message == 'Data is saved'\" class=\"alert alert-success alert-dismissible\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n              {{ form.message }}\r\n            </div>\r\n\r\n            <div *ngIf=\"form.error && form.message\" class=\"alert alert-danger alert-dismissible\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n              {{ form.message }}\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'VehicleId' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-flag grey-text\"></i></div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"vehicleIdId\" [(ngModel)]=\"form.data.vehicleIdId\"\r\n                  aria-label=\"ngSelected\">\r\n                  <option [ngValue]=\"undefined\">{{ 'Select vehicleId' | translate }}</option>\r\n                  <option *ngFor=\"let obj of form.preload.vehicleIdList\" [value]=\"obj.key\">{{ obj.key }}</option>\r\n                </select>\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.vehicleIdId\" class=\"alertRedColor\">{{form.inputerror.vehicleIdId}}</span>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Name' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fas fa-user\"></i></div>\r\n                </div>\r\n                <input type=\"text\" name=\"name\" [(ngModel)]=\"form.data.name\" class=\"form-control\" placeholder=\"{{ 'Enter name' | translate }}\" (keypress)=\"validateAlphabetInput($event)\">\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.name\" class=\"alertRedColor\">{{ form.inputerror.name }}</span>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Allowed Speed' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fas fa-money-bill-wave\"></i></div>\r\n                </div>\r\n                <input type=\"number\" name=\"allowedSpeed\" [(ngModel)]=\"form.data.allowedSpeed\" class=\"form-control\" placeholder=\"{{ 'Enter allowedSpeed' | translate }}\">\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.allowedSpeed\" class=\"alertRedColor\">{{ form.inputerror.allowedSpeed }}</span>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Start Date' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></div>\r\n                </div>\r\n                <input type=\"date\" name=\"startDate\" [value]=\"form.data.startDate | date:'yyyy-MM-dd'\" (input)=\"form.data.startDate=parseDate($event.target.value)\" class=\"form-control\" required />\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.startDate\" class=\"alertRedColor\">{{ form.inputerror.startDate }}</span>\r\n            </div>\r\n\r\n            <div class=\"row pt-2 pb-3 justify-content-center\">\r\n              <div class=\"col-md-4\">\r\n                <button *ngIf=\"!form.data.id\" (click)=\"onUpload()\" class=\"btn btn-success\">{{ 'Save' | translate }}</button>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <button *ngIf=\"form.data.id\" (click)=\"onUpload()\" class=\"btn btn-success\">{{ 'Update' | translate }}</button>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <a class=\"btn btn-warning\" type=\"button\" [routerLink]=\"['/routelist']\">{{ 'List' | translate }}</a>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/route/route.component.ts":
/*!******************************************!*\
  !*** ./src/app/route/route.component.ts ***!
  \******************************************/
/*! exports provided: RouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteComponent", function() { return RouteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var RouteComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RouteComponent, _super);
    function RouteComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.ROUTE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.getKey = false;
        _this.selected = null;
        _this.userForm = null;
        return _this;
    }
    RouteComponent.prototype.submit = function () {
        var _self = this;
        console.log('in submit');
        console.log(this.form);
        console.log(this.form.data);
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {}; // Clear input errors here
            if (res.success) {
                _self.form.error = false; // Set error to false on success
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("----------Rahul----------.");
                // Clear form data if needed
                // _self.form.data = {};
            }
            else {
                _self.form.error = true;
                if (res.result.inputerror) {
                    _self.form.inputerror = res.result.inputerror;
                }
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    RouteComponent.prototype.submit1 = function () {
        var _self = this;
        console.log(this.form + "submit running start");
        console.log(this.form.data + "form data going to be submit");
        this.serviceLocator.httpService.post(this.api.search, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            _self.form.data.id = res.result.data;
            if (res.success) {
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("--------------------.");
            }
            else {
                _self.form.error = true;
                _self.form.inputerror = res.result.inputerror;
                _self.form.message = res.result.message;
            }
            _self.form.data.id = res.result.data;
            console.log('FORM', _self.form);
        });
    };
    RouteComponent.prototype.onUpload = function (userform) {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    RouteComponent.prototype.validatePaymentTerm = function () {
        var paymentTerm = this.form.data.paymentTerm;
        var paymentTermPattern = /^[a-zA-Z ]*$/; // Only allows alphabetic characters and spaces
        if (!paymentTermPattern.test(paymentTerm)) {
            this.form.inputerror.paymentTerm = 'Invalid payment term';
        }
        else {
            delete this.form.inputerror.paymentTerm;
        }
    };
    RouteComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.vehicleIdId);
        console.log(form.vehicleIdId);
        flag = flag && validator.isNotNullObject(form.name);
        console.log(form.name);
        flag = flag && validator.isNotNullObject(form.allowedSpeed);
        console.log(form.allowedSpeed);
        flag = flag && validator.isNotNullObject(form.startDate);
        console.log(form.startDate);
        return flag;
    };
    RouteComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        console.log(form.id + 'populate form in shoppingcomponent');
        form.name = data.name;
        form.allowedSpeed = data.allowedSpeed;
        form.startDate = data.startDate;
        form.vehicleIdId = data.vehicleIdId;
    };
    RouteComponent.prototype.validatePhone = function (event) {
        var input = event.key;
        // Check if the input is a number or backspace
        if ((isNaN(Number(input)) && input !== 'Backspace') || (input === ' ')) {
            event.preventDefault();
        }
        // Limit the input to 10 characters
        if (this.form.data.phone && this.form.data.phone.length >= 10 && input !== 'Backspace') {
            event.preventDefault();
        }
    };
    RouteComponent.prototype.validateAlphabetInput = function (event) {
        var charCode = event.which || event.keyCode;
        var charStr = String.fromCharCode(charCode);
        // Regular expression to test if the character is a letter
        var letterRegex = /^[a-zA-Z\s]+$/;
        // Test if the input matches the allowed characters
        if (!letterRegex.test(charStr)) {
            event.preventDefault();
        }
        // Optionally, check the entire value against the name format regex
        var inputElement = event.target;
        var inputValue = inputElement.value + charStr; // Add the current character to the input value
        // Regex for valid name format "FirstName LastName"
        var nameRegex = /^[A-Z][a-z]+ [A-Z][a-z]+$/;
        // Check if the current value matches the valid name format
        if (!nameRegex.test(inputValue)) {
            // Handle invalid input (e.g., disable submit button, show error message)
            // Example:
            inputElement.classList.add('invalid'); // Apply CSS class for invalid input
        }
        else {
            inputElement.classList.remove('invalid'); // Remove invalid CSS class if format is valid
        }
    };
    RouteComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    RouteComponent.prototype.test = function () {
    };
    RouteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-route',
            template: __webpack_require__(/*! ./route.component.html */ "./src/app/route/route.component.html"),
            styles: [__webpack_require__(/*! ./route.component.css */ "./src/app/route/route.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], RouteComponent);
    return RouteComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/route/routelist.component.css":
/*!***********************************************!*\
  !*** ./src/app/route/routelist.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlL3JvdXRlbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/route/routelist.component.html":
/*!************************************************!*\
  !*** ./src/app/route/routelist.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  #nnn {\r\n    background: none;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .panel-heading {\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .search-inputs {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .search-inputs .form-control,\r\n  .search-inputs .btn {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .content-wrapper {\r\n    background: url(assets/files/wall.jpg) no-repeat center center;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    width: auto;\r\n    height: 105vh;\r\n    padding: 20px;\r\n  }\r\n\r\n  .table-responsive {\r\n    margin-top: 20px;\r\n  }\r\n</style>\r\n\r\n<div class=\"content-wrapper\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\">\r\n        <h1 class=\"text-primary font-weight-bold\">{{ 'Route List' | translate }}</h1>\r\n      </div>\r\n\r\n      <div class=\"row search-inputs justify-content-center\">\r\n        <div class=\"col-md-3\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.name\"\r\n            placeholder=\"{{ 'Search Name' | translate }}\" (input)=\"validateInput($event, 'name')\">\r\n          <div *ngIf=\"!isValidNameInput\" class=\"text-danger\">{{ nameErrorMessage }}</div>\r\n        </div>\r\n        <!--  <div class=\"col-md-3\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.mobile\"\r\n            placeholder=\"{{ 'Search mobile' | translate }}\" (input)=\"validateInput($event, 'mobile')\">\r\n          <div *ngIf=\"!isValidMobileInput\" class=\"text-danger\">{{ mobileErrorMessage }}</div>\r\n        </div> -->\r\n\r\n        <div class=\"col-md-3\">\r\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.searchParams.startDate\"\r\n            (ngModelChange)=\"formatDate($event)\" placeholder=\"{{ 'Search startDate' | translate }}\">\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"form.searchParams.allowedSpeed\"\r\n            placeholder=\"{{ 'Search allowedSpeed' | translate }}\" (input)=\"validateInput($event, 'allowedSpeed')\">\r\n          <div *ngIf=\"!isValidAllowedSpeed\" class=\"text-danger\">{{ allowedSpeedErrorMessage }}</div>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-md-3\">\r\n          <select class=\"form-control\" name=\"vehicleIdId\" [(ngModel)]=\"form.searchParams.vehicleIdId\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{ 'Select vehicleId' | translate }}</option>\r\n            <option *ngFor=\"let obj of form.preload.vehicleIdList\" [value]=\"obj.key\">{{ obj.key }}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      \r\n\r\n      <div class=\"row mt-2 justify-content-center\">\r\n        <div class=\"col-md-2\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary btn-block\">{{ 'Search' | translate }}</button>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <button (click)=\"forward('/route')\" type=\"button\" class=\"btn btn-success btn-block\">{{ 'Add Route' |\r\n            translate }}</button>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger btn-block\">{{ 'Delete' | translate }}</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"form.error || form.message\" class=\"row mt-2 justify-content-center\">\r\n        <div class=\"col-md-6\">\r\n          <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{ form.message }}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{ form.message }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-responsive mt-3\">\r\n        <table class=\"table table-bordered table-hover font-weight-bold text-dark\">\r\n          <thead class=\"thead-dark text-uppercase\">\r\n            <tr align=\"center\">\r\n              <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\"\r\n                  (change)=\"checkUncheckAll($event)\" /></th>\r\n              <th>{{ 'S.No' }}</th>\r\n              <th>{{ 'name' }}</th>\r\n              <th>{{ 'allowed Speed' }}</th>\r\n              <th>{{ 'Start date' }}</th>\r\n              <th>{{ 'vehicleId' }}</th>\r\n              <th>{{ 'Edit' }}</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n              <td><input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" [id]=\"m.id\" /></td>\r\n              <td>{{ (form.pageNo * 5) + i + 1 }}</td>\r\n              <td>{{ m.name }}</td>\r\n              <td>{{ m.allowedSpeed }}</td>\r\n              <td>{{ convertToLocalDate(m.startDate) }}</td>\r\n              <td>{{ m.vehicleIdId }}</td>\r\n              <td>\r\n                <button class=\"fa fa-edit text-primary\" id=\"nnn\" (click)=\"forward('/route/' + m.id)\"></button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <div class=\"d-flex justify-content-between mt-3\">\r\n        <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{ 'Previous' | translate\r\n          }}</button>\r\n        <div *ngIf=\"form.list.length == 0\">\r\n          <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/routelist']\" (click)=\"exit()\">{{ 'Back' |\r\n            translate }}</a>\r\n        </div>\r\n        <button (click)=\"next()\" [disabled]=\"nextList == 0\" class=\"btn btn-info\">{{ 'Next' | translate }}</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/route/routelist.component.ts":
/*!**********************************************!*\
  !*** ./src/app/route/routelist.component.ts ***!
  \**********************************************/
/*! exports provided: RoutelistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutelistComponent", function() { return RoutelistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var RoutelistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RoutelistComponent, _super);
    function RoutelistComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.ROUTE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null },
            inputerror: {},
            searchParams: {
                name: '',
                allowedSpeed: '',
                date: '',
                vehicleIdId: '',
                startDate: ''
            },
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        _this.isValidMobileInput = true;
        _this.isValidNameInput = true;
        _this.isValidAllowedSpeed = true;
        _this.nameErrorMessage = '';
        _this.mobileErrorMessage = '';
        _this.allowedSpeedErrorMessage = '';
        return _this;
    }
    RoutelistComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    // Format date function
    RoutelistComponent.prototype.formatDate = function (event) {
        var selectedDate = new Date(event);
        var formattedDate = selectedDate.toISOString().split('T')[0];
        this.form.searchParams.date = formattedDate;
    };
    // Convert date to local format for display
    RoutelistComponent.prototype.convertToLocalDate = function (dateString) {
        var date = new Date(dateString);
        var options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return date.toLocaleDateString(undefined, options);
    };
    // Validate input for name, mobile, and allowedSpeed fields
    RoutelistComponent.prototype.validateInput = function (event, field) {
        var value = event.target.value;
        if (field === 'mobile') {
            this.isValidMobileInput = /^[0-9]*$/.test(value); // Check if the input contains only numbers
            if (!this.isValidMobileInput) {
                this.mobileErrorMessage = 'Please type numbers only';
            }
            else {
                this.mobileErrorMessage = '';
            }
        }
        else if (field === 'name') {
            this.isValidNameInput = /^[A-Za-z\s]*$/.test(value); // Check if the input contains only letters and spaces
            if (!this.isValidNameInput) {
                this.nameErrorMessage = 'Please type alphabets only';
            }
            else {
                this.nameErrorMessage = '';
            }
        }
        else if (field === 'allowedSpeed') {
            if (value === '') {
                this.isValidAllowedSpeed = true; // Treat empty input as valid
                this.allowedSpeedErrorMessage = '';
            }
            else {
                var speed = parseInt(value, 10);
                this.isValidAllowedSpeed = speed >= 70 && speed <= 150; // Check if the input is between 70 and 150
                if (!this.isValidAllowedSpeed) {
                    this.allowedSpeedErrorMessage = 'Please type a valid allowed speed (70-150)';
                }
                else {
                    this.allowedSpeedErrorMessage = '';
                }
            }
        }
    };
    // Submit method
    RoutelistComponent.prototype.submit = function () {
        // Reset page number before searching
        this.form.pageNo = 0;
        // Call the search method after formatting the date
        this.search();
    };
    // Search method
    RoutelistComponent.prototype.search = function () {
        // Clear previous search message
        this.form.searchMessage = null;
        // Perform the search operation with the search parameters
        _super.prototype.search.call(this);
    };
    RoutelistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-routelist',
            template: __webpack_require__(/*! ./routelist.component.html */ "./src/app/route/routelist.component.html"),
            styles: [__webpack_require__(/*! ./routelist.component.css */ "./src/app/route/routelist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], RoutelistComponent);
    return RoutelistComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/service-locator.service.ts":
/*!********************************************!*\
  !*** ./src/app/service-locator.service.ts ***!
  \********************************************/
/*! exports provided: ServiceLocatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceLocatorService", function() { return ServiceLocatorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _utility_data_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utility/data-validator */ "./src/app/utility/data-validator.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _endpoint_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./endpoint-service.service */ "./src/app/endpoint-service.service.ts");






var ServiceLocatorService = /** @class */ (function () {
    function ServiceLocatorService(hs, dv, r, ep) {
        this.hs = hs;
        this.dv = dv;
        this.r = r;
        this.ep = ep;
        this.httpService = null;
        this.dataValidator = null;
        this.router = null;
        this.endpoints = null;
        this.httpService = hs;
        this.dataValidator = dv;
        this.router = r;
        this.endpoints = ep;
    }
    /**
     * get path variable from url
     *
     * @param route
     * @param callback
     */
    ServiceLocatorService.prototype.getPathVariable = function (route, callback) {
        route.params.subscribe(function (params) {
            callback(params);
        });
    };
    /**
     * Forward to page
     *
     * @param page
     */
    ServiceLocatorService.prototype.forward = function (page) {
        this.router.navigateByUrl(page);
    };
    ServiceLocatorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpServiceService"], _utility_data_validator__WEBPACK_IMPORTED_MODULE_3__["DataValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _endpoint_service_service__WEBPACK_IMPORTED_MODULE_5__["EndpointServiceService"]])
    ], ServiceLocatorService);
    return ServiceLocatorService;
}());



/***/ }),

/***/ "./src/app/spinner/spinner.component.css":
/*!***********************************************!*\
  !*** ./src/app/spinner/spinner.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/spinner/spinner.component.html":
/*!************************************************!*\
  !*** ./src/app/spinner/spinner.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  spinner works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/spinner/spinner.component.ts":
/*!**********************************************!*\
  !*** ./src/app/spinner/spinner.component.ts ***!
  \**********************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
    }
    SpinnerComponent.prototype.ngOnInit = function () {
    };
    SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spinner',
            template: __webpack_require__(/*! ./spinner.component.html */ "./src/app/spinner/spinner.component.html"),
            styles: [__webpack_require__(/*! ./spinner.component.css */ "./src/app/spinner/spinner.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/app/student/student-list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/student/student-list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"content-wrapper\" style=\"padding-top: 3%; padding-bottom: 15%; \r\nbackground: url(assets/files/gettyimages-1132439283-640x640.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: 90vh;\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\" style=\"height: 70px;\">\r\n\r\n        <div class=\"text-center\">\r\n          <h2 class=\"text-primary font-weight-bold\">{{'Student List' | translate }}</h2>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row p-1\">\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.enrolNo\"\r\n            placeholder=\"{{'Search Enrollment' | translate }}\">\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.collegeName\"\r\n            placeholder=\"{{'Search College' | translate }}\">\r\n        </div>\r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.email\"\r\n            placeholder=\"{{'Search Email' | translate }}\">\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.phoneNo\"\r\n            placeholder=\"{{'Search Mobile Number' | translate }}\">\r\n        </div>\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\r\n            {{'Search' | translate }}</button>\r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"col-lg-2\">\r\n          <button (click)=\"forward('/student')\" type=\"button\" class=\"btn btn-success\">{{'Add Student' | translate }}\r\n          </button>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n            {{'Delete'| translate}}</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-striped table-hover\">\r\n            <thead class=\"thead-light text-uppercase\">\r\n              <tr align=\"center\">\r\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\"\r\n                    (change)=\"checkUncheckAll($event)\" /></th>\r\n                <th>{{'S.No' | translate }}</th>\r\n                <th>{{'Enrollment No' | translate }}</th>\r\n                <th>{{'First Name' | translate }}</th>\r\n                <th>{{'Last Name' | translate }}</th>\r\n                <th>{{'College' | translate }}</th>\r\n                <th>{{'DOB' | translate }}</th>\r\n                <th>{{'Mobile' | translate }}</th>\r\n                <th>{{'Email' | translate }}</th>\r\n                <th>{{'Edit' | translate}}</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n                <td> <input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" id=\"{{m.id}}\" value=\"{{isMasterSel}}\" />\r\n                </td>\r\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\r\n                <td>{{m.enrolNo}}</td>\r\n                <td> {{ m.firstName }} </td>\r\n                <td> {{ m.lastName }} </td>\r\n                <td> {{ m.collegeName }} </td>\r\n                <td>{{m.dob | date : 'dd-MM-yyyy'}}</td>\r\n                <td> {{ m.phoneNo }} </td>\r\n                <td> {{ m.email }} </td>\r\n                <td>\r\n                  <a (click)=\"forward( '/student/' +  m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-edit text-info\"></i>\r\n                  </a>\r\n                  <!-- /\r\n                  <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-trash text-danger\"></i>\r\n                  </a> -->\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <table style=\"width: 100%;\">\r\n              <tr> <td style=\"width: 50%;\"><button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{'Previous' |\r\n                    translate }} </button>\r\n                </td>  \r\n                <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\r\n                <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><a class=\"btn btn-warning mr-1\" [routerLink]=\"['/studentlist']\" (click)=\"exit()\">{{'Back' | translate}}</a></td>\r\n                <td>\r\n                  <button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\">{{'Next' | translate }} </button>\r\n                 </td>\r\n                </tr>\r\n              </table>\r\n          \r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/student/student-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/student/student-list.component.ts ***!
  \***************************************************/
/*! exports provided: StudentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentListComponent", function() { return StudentListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");





var StudentListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StudentListComponent, _super);
    function StudentListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.STUDENT, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    StudentListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-list',
            template: __webpack_require__(/*! ./student-list.component.html */ "./src/app/student/student-list.component.html"),
            styles: [__webpack_require__(/*! ./student.component.css */ "./src/app/student/student.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], StudentListComponent);
    return StudentListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/student/student.component.css":
/*!***********************************************!*\
  !*** ./src/app/student/student.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertRedColor {\r\n    color: red;\r\n}\r\n\r\n\r\n.required-field::after { \t\t\r\n  content: \"*\";\t\t\r\n  color: red;\t\t\r\n   }\r\n\r\n\r\n.successColor{\r\n    color: green;\r\n   }\r\n\r\n\r\n.btn-space {\r\n    margin-right: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC9zdHVkZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7OztBQUdBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7R0FDVDs7O0FBRUE7SUFDQyxZQUFZO0dBQ2I7OztBQUVBO0lBQ0MsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvc3R1ZGVudC9zdHVkZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnRSZWRDb2xvciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG5cclxuLnJlcXVpcmVkLWZpZWxkOjphZnRlciB7IFx0XHRcclxuICBjb250ZW50OiBcIipcIjtcdFx0XHJcbiAgY29sb3I6IHJlZDtcdFx0XHJcbiAgIH1cdFxyXG5cclxuICAgLnN1Y2Nlc3NDb2xvcntcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgfVxyXG5cclxuICAgLmJ0bi1zcGFjZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/student/student.component.html":
/*!************************************************!*\
  !*** ./src/app/student/student.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad{\r\n background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n background-repeat: no repeat;\r\n background-size: 100%;\r\n padding-bottom: 25px\r\n ;\r\n }\r\n</style>\r\n<div class=\"row \" style=\"padding-top: 3%; \r\npadding-bottom:3%;\r\nbackground: url(assets/files/wall.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add Student' | translate }}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Update Student' | translate }}</h2>\r\n\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Enrollment No' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-id-card grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"enrolNo\" [(ngModel)]=\"form.data.enrolNo\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Enrollment Number' | translate }}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.enrolNo}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'First Name' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"firstN\" [(ngModel)]=\"form.data.firstName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter First Name' | translate }}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.firstName}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Last Name' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"lastN\" [(ngModel)]=\"form.data.lastName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Last Name' | translate }}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.firstName}} </span>\r\n          </div>\r\n\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'College' | translate }} </b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-university grey-text\"></i> </div>\r\n                </div>\r\n\r\n                <select class=\"form-control\" name=\"collegeId\" [(ngModel)]=\"form.data.collegeId\"\r\n                  style=\"cursor: pointer;\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{' Select College' | translate }}</option>\r\n                  <option *ngFor=\"let obj of form.preload.collegeList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.collegeId}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Email' | translate }} </b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"email\" [(ngModel)]=\"form.data.email\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Email Id' | translate }}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.email}} </span>\r\n          </div>\r\n          \r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'DOB' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"date\" name=\"dob\" [value]=\"form.data.dob| date:'yyyy-MM-dd'\"\r\n                (input)=\"form.data.dob=parseDate($event.target.value)\"\r\n                class=\"form-control form-control-sm\" required />\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.dob}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"  ><b>{{'Mobile No' | translate }} </b>\r\n              <span class=\"required-field\" ></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" maxlength=\"10\" name=\"phoneNo\" [(ngModel)]=\"form.data.phoneNo\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Mobile Number' | translate }}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.phoneNo}} </span>\r\n          </div>\r\n\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate }}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Update' | translate }}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button (click)=\"forward('/studentlist')\" type=\"button\"\r\n                class=\"btn btn-warning mr-1\">{{'List' | translate }}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/student/student.component.ts":
/*!**********************************************!*\
  !*** ./src/app/student/student.component.ts ***!
  \**********************************************/
/*! exports provided: StudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComponent", function() { return StudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");





var StudentComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StudentComponent, _super);
    function StudentComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.STUDENT, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.selected = null;
        return _this;
    }
    StudentComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.firstName);
        flag = flag && validator.isNotNullObject(form.lastName);
        flag = flag && validator.isNotNullObject(form.enrolNo);
        flag = flag && validator.isNotNullObject(form.phoneNo);
        flag = flag && validator.isNotNullObject(form.email);
        flag = flag && validator.isNotNullObject(form.dob);
        return flag;
    };
    StudentComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.collegeId = data.collegeId;
        console.log(form.collegeId + " inside populateForm method");
        form.email = data.email;
        form.enrolNo = data.enrolNo;
        form.dob = data.dob;
        //let ndate = new Date(data.dob);
        //console.log(form.dob + 'date ------',ndate)
        form.firstName = data.firstName;
        form.lastName = data.lastName;
        form.phoneNo = data.phoneNo;
    };
    StudentComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    StudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student',
            template: __webpack_require__(/*! ./student.component.html */ "./src/app/student/student.component.html"),
            styles: [__webpack_require__(/*! ./student.component.css */ "./src/app/student/student.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], StudentComponent);
    return StudentComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseCtl"]));



/***/ }),

/***/ "./src/app/subject/subject-list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/subject/subject-list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"content-wrapper\" style=\"padding-top: 3%;padding-bottom: 15%; \r\nbackground: url(assets/files/gettyimages-1132439283-640x640.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: 90vh;\" >\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\" style=\"height: 50px;\">\r\n        <div class=\"text-center\">\r\n          <h1 class=\"text-primary font-weight-bold\">{{'Subject List' | translate }}</h1>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row p-1\">\r\n        <div class=\"col-sm-1\"></div>\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.subjectName\"\r\n            placeholder=\"{{'Search Subject' | translate}}\">\r\n\r\n        </div>\r\n        <!-- <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.loginId\" placeholder=\"{{'Search Email' | translate}}\">\r\n        </div> -->\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.courseName\"\r\n            placeholder=\"{{'Search Course' | translate}}\">\r\n\r\n        </div>\r\n\r\n        \r\n        <div class=\"col-sm-2\">\r\n          <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.status\" placeholder=\"{{'Search Status' | translate}}\"> -->\r\n        </div>\r\n        <div class=\"col-sm-1 ml-3\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\r\n            {{'Search' | translate }}</button>\r\n        </div>\r\n        <div class=\"col-lg-2 ml-4\">\r\n          <button (click)=\"forward('/subject')\" type=\"button\" class=\"btn btn-success\">{{'Add Subject' | translate}}\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n            {{'Delete'| translate}}</button>\r\n        </div>\r\n      </div>\r\n      \r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n\r\n\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-striped table-hover\">\r\n            <thead class=\"thead-light text-uppercase\">\r\n              <tr>\r\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\" (change)=\"checkUncheckAll($event)\"/></th>\r\n                <th>{{'S.No.' | translate}}</th>\r\n                <th>{{'Name' | translate}}</th>\r\n                <th>{{'Course' | translate}}</th>\r\n               \r\n                <th>{{'Description' | translate}}</th>\r\n                <th>{{'Edit' | translate }}</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let m of form.list; let i = index\">\r\n                <td> <input type=\"checkbox\"  #checkboxes (change)=\"checklistUpdate()\"  name=\"list_name\"  id=\"{{m.id}}\" value=\"{{isMasterSel}}\"/>\r\n                </td>\r\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\r\n                <td> {{ m.subjectName}} </td>\r\n                <td> {{ m.courseName}} </td>\r\n               \r\n                <td> {{ m.description }} </td>\r\n                <td>\r\n                  <a (click)=\"forward( '/subject/' +  m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-edit text-info\"></i>\r\n                  </a>\r\n                  <!-- /\r\n                  <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-trash text-danger\"></i>\r\n                  </a> -->\r\n                </td>\r\n                \r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <table style=\"width: 100%;\">\r\n            <tr>\r\n              <td style=\"width: 50%;\">\r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\r\n            }} </button></td>\r\n            <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\r\n            <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><a class=\"btn btn-warning mr-1\" [routerLink]=\"['/subjectlist']\"  (click)=\"exit()\">{{'Back' | translate}}</a></td>\r\n\r\n\r\n        \r\n            <td><button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\r\n              translate }}</button></td>\r\n            </tr>\r\n            </table>\r\n\r\n                \r\n            \r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/subject/subject-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/subject/subject-list.component.ts ***!
  \***************************************************/
/*! exports provided: SubjectListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectListComponent", function() { return SubjectListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");





var SubjectListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SubjectListComponent, _super);
    function SubjectListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.SUBJECT, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    SubjectListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subject-list',
            template: __webpack_require__(/*! ./subject-list.component.html */ "./src/app/subject/subject-list.component.html"),
            styles: [__webpack_require__(/*! ./subject.component.css */ "./src/app/subject/subject.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SubjectListComponent);
    return SubjectListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/subject/subject.component.css":
/*!***********************************************!*\
  !*** ./src/app/subject/subject.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YmplY3Qvc3ViamVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/subject/subject.component.html":
/*!************************************************!*\
  !*** ./src/app/subject/subject.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  .grad{\r\n background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n background-repeat: no repeat;\r\n background-size: 100%;\r\n padding-bottom: 25px\r\n ;\r\n }\r\n</style>\r\n\r\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:13%;\r\nbackground: url(assets/files/wall.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Add Subject' | translate}}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Update Subject' | translate}}</h2>\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Subject Name' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"subjectName\" [(ngModel)]=\"form.data.subjectName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Subject Name' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.subjectName}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Description' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text\"></i> </div>\r\n                </div>\r\n                <textarea class=\"form-control\" name=\"description\" [(ngModel)]=\"form.data.description\"\r\n                  placeholder=\"{{'Enter Description' | translate}}\"></textarea>\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.description}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Subject Name' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"courseId\" [(ngModel)]=\"form.data.courseId\" style=\"cursor: pointer;\">\r\n                  <option *ngFor=\"let obj of form.preload.courseList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.subjectName}} </span>\r\n          </div>\r\n\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate}}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Update' | translate}}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button (click)=\"forward('/subjectlist')\" type=\"button\"\r\n                class=\"btn btn-warning mr-1\">{{'List' | translate}}\r\n              </button></div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/subject/subject.component.ts":
/*!**********************************************!*\
  !*** ./src/app/subject/subject.component.ts ***!
  \**********************************************/
/*! exports provided: SubjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectComponent", function() { return SubjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");





var SubjectComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SubjectComponent, _super);
    function SubjectComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.SUBJECT, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    SubjectComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    SubjectComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.subjectName);
        flag = flag && validator.isNotNullObject(form.description);
        flag = flag && validator.isNotNullObject(form.courseId);
        return flag;
    };
    SubjectComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.subjectName = data.subjectName;
        form.description = data.description;
        form.courseId = data.courseId;
        console.log('Populated Form', form);
    };
    SubjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subject',
            template: __webpack_require__(/*! ./subject.component.html */ "./src/app/subject/subject.component.html"),
            styles: [__webpack_require__(/*! ./subject.component.css */ "./src/app/subject/subject.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SubjectComponent);
    return SubjectComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/supplier/supplier.component.css":
/*!*************************************************!*\
  !*** ./src/app/supplier/supplier.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cHBsaWVyL3N1cHBsaWVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/supplier/supplier.component.html":
/*!**************************************************!*\
  !*** ./src/app/supplier/supplier.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n\r\n  .input-group-addon {\r\n    box-shadow: 9px 8px 7px #001a33;\r\n  }\r\n\r\n  .required-field {\r\n    color: red;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .alertRedColor {\r\n    color: red;\r\n  }\r\n\r\n  .card-body {\r\n    padding: 2rem;\r\n  }\r\n\r\n  .input-group-text i {\r\n    width: 1.5rem;\r\n  }\r\n\r\n  .btn-primary,\r\n  .btn-success,\r\n  .btn-warning {\r\n    width: 100%;\r\n  }\r\n\r\n  .form-control {\r\n    height: calc(2.25rem + 2px);\r\n  }\r\n\r\n  .form-group {\r\n    margin-bottom: 1.5rem;\r\n  }\r\n\r\n  .input-group-prepend .input-group-text {\r\n    background-color: #e9ecef;\r\n    border: 1px solid #ced4da;\r\n  }\r\n\r\n  .input-group-prepend .input-group-text i {\r\n    color: #495057;\r\n  }\r\n\r\n  .row {\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n  }\r\n\r\n  .textarea-height {\r\n    height: 100px;\r\n  }\r\n\r\n  .card {\r\n    margin: auto;\r\n    max-width: 500px;\r\n  }\r\n</style>\r\n\r\n<div class=\"container-fluid\" style=\"padding: 2% 0; background: url('assets/files/wall.jpg') no-repeat center center; background-attachment: fixed; background-size: cover; width: 100%; height: auto;\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body input-group-addon grad\">\r\n          <form name=\"userForm\">\r\n            <h2 *ngIf=\"!form.data.id\" class=\"text-primary font-weight-bold text-center\">{{ 'Add Supplier' | translate }}</h2>\r\n            <h2 *ngIf=\"form.data.id\" class=\"text-primary font-weight-bold text-center\">{{ 'Update Supplier' | translate }}</h2>\r\n\r\n            <div *ngIf=\"!form.error && form.message == 'Data is saved'\" class=\"alert alert-success alert-dismissible\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n              {{ form.message }}\r\n            </div>\r\n\r\n            <div *ngIf=\"form.error && form.message\" class=\"alert alert-danger alert-dismissible\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n              {{ form.message }}\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Category' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fas fa-flag\"></i></div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"categoryId\" [(ngModel)]=\"form.data.categoryId\" aria-label=\"ngSelected\">\r\n                  <option [ngValue]=\"undefined\">{{ 'Select category' | translate }}</option>\r\n                  <option *ngFor=\"let obj of form.preload.categoryList\" [value]=\"obj.key\">{{ obj.value }}</option>\r\n                </select>\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.categoryId\" class=\"alertRedColor\">{{ form.inputerror.categoryId }}</span>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Name' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fas fa-user\"></i></div>\r\n                </div>\r\n                <input type=\"text\" name=\"name\" [(ngModel)]=\"form.data.name\" class=\"form-control\" placeholder=\"{{ 'Enter name' | translate }}\" (keypress)=\"validateAlphabetInput($event)\">\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.name\" class=\"alertRedColor\">{{ form.inputerror.name }}</span>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Payment Term' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fas fa-money-bill-wave\"></i></div>\r\n                </div>\r\n                <input type=\"text\" name=\"paymentTerm\" [(ngModel)]=\"form.data.paymentTerm\" class=\"form-control\" placeholder=\"{{ 'Enter payment term' | translate }}\" (keypress)=\"validateNumberInput($event)\">\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.paymentTerm\" class=\"alertRedColor\">{{ form.inputerror.paymentTerm }}</span>\r\n            </div>\r\n            \r\n            \r\n            \r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Registration Date' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></div>\r\n                </div>\r\n                <input type=\"date\" name=\"registrationDate\" [value]=\"form.data.registrationDate | date:'yyyy-MM-dd'\" (input)=\"form.data.registrationDate=parseDate($event.target.value)\" class=\"form-control\" required />\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.registrationDate\" class=\"alertRedColor\">{{ form.inputerror.registrationDate }}</span>\r\n            </div>\r\n\r\n            <div class=\"row pt-2 pb-3 justify-content-center\">\r\n              <div class=\"col-md-4\">\r\n                <button *ngIf=\"!form.data.id\" (click)=\"onUpload()\" class=\"btn btn-success\">{{ 'Save' | translate }}</button>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <button *ngIf=\"form.data.id\" (click)=\"onUpload()\" class=\"btn btn-success\">{{ 'Update' | translate }}</button>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <a class=\"btn btn-warning\" type=\"button\" [routerLink]=\"['/supplierlist']\">{{ 'List' | translate }}</a>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/supplier/supplier.component.ts":
/*!************************************************!*\
  !*** ./src/app/supplier/supplier.component.ts ***!
  \************************************************/
/*! exports provided: SupplierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierComponent", function() { return SupplierComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var SupplierComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SupplierComponent, _super);
    function SupplierComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.SUPPLIER, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.getKey = false;
        _this.selected = null;
        _this.userForm = null;
        return _this;
    }
    SupplierComponent.prototype.submit = function () {
        var _self = this;
        console.log('in submit');
        console.log(this.form);
        console.log(this.form.data);
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {}; // Clear input errors here
            if (res.success) {
                _self.form.error = false; // Set error to false on success
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("----------Rahul----------.");
                // Clear form data if needed
                // _self.form.data = {};
            }
            else {
                _self.form.error = true;
                if (res.result.inputerror) {
                    _self.form.inputerror = res.result.inputerror;
                }
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    SupplierComponent.prototype.submit1 = function () {
        var _self = this;
        console.log(this.form + "submit running start");
        console.log(this.form.data + "form data going to be submit");
        this.serviceLocator.httpService.post(this.api.search, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            _self.form.data.id = res.result.data;
            if (res.success) {
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("--------------------.");
            }
            else {
                _self.form.error = true;
                _self.form.inputerror = res.result.inputerror;
                _self.form.message = res.result.message;
            }
            _self.form.data.id = res.result.data;
            console.log('FORM', _self.form);
        });
    };
    SupplierComponent.prototype.onUpload = function (userform) {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    SupplierComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.categoryId);
        console.log(form.categoryId);
        flag = flag && validator.isNotNullObject(form.name);
        console.log(form.name);
        flag = flag && validator.isNotNullObject(form.paymentTerm);
        console.log(form.paymentTerm);
        flag = flag && validator.isNotNullObject(form.registrationDate);
        console.log(form.registrationDate);
        return flag;
    };
    SupplierComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        console.log(form.id + 'populate form in shoppingcomponent');
        form.name = data.name;
        form.paymentTerm = data.paymentTerm;
        form.registrationDate = data.registrationDate;
        form.categoryId = data.categoryId;
    };
    SupplierComponent.prototype.validatePhone = function (event) {
        var input = event.key;
        // Check if the input is a number or backspace
        if ((isNaN(Number(input)) && input !== 'Backspace') || (input === ' ')) {
            event.preventDefault();
        }
        // Limit the input to 10 characters
        if (this.form.data.phone && this.form.data.phone.length >= 10 && input !== 'Backspace') {
            event.preventDefault();
        }
    };
    SupplierComponent.prototype.validateNumberInput = function (event) {
        var charCode = event.which ? event.which : event.keyCode;
        var charStr = String.fromCharCode(charCode);
        // Allow only digits
        if (!/^\d$/.test(charStr)) {
            event.preventDefault();
        }
    };
    SupplierComponent.prototype.validateAlphabetInput = function (event) {
        var charCode = event.which || event.keyCode;
        var charStr = String.fromCharCode(charCode);
        // Regular expression to test if the character is a letter
        var letterRegex = /^[a-zA-Z\s]+$/;
        // Test if the input matches the allowed characters
        if (!letterRegex.test(charStr)) {
            event.preventDefault();
        }
        // Optionally, check the entire value against the name format regex
        var inputElement = event.target;
        var inputValue = inputElement.value + charStr; // Add the current character to the input value
        // Regex for valid name format "FirstName LastName"
        var nameRegex = /^[A-Z][a-z]+ [A-Z][a-z]+$/;
        // Check if the current value matches the valid name format
        if (!nameRegex.test(inputValue)) {
            // Handle invalid input (e.g., disable submit button, show error message)
            // Example:
            inputElement.classList.add('invalid'); // Apply CSS class for invalid input
        }
        else {
            inputElement.classList.remove('invalid'); // Remove invalid CSS class if format is valid
        }
    };
    SupplierComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    SupplierComponent.prototype.test = function () {
    };
    SupplierComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-supplier',
            template: __webpack_require__(/*! ./supplier.component.html */ "./src/app/supplier/supplier.component.html"),
            styles: [__webpack_require__(/*! ./supplier.component.css */ "./src/app/supplier/supplier.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], SupplierComponent);
    return SupplierComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/supplier/supplierlist.component.css":
/*!*****************************************************!*\
  !*** ./src/app/supplier/supplierlist.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cHBsaWVyL3N1cHBsaWVybGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/supplier/supplierlist.component.html":
/*!******************************************************!*\
  !*** ./src/app/supplier/supplierlist.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  /* Adjustments for panel heading and main content wrapper */\r\n  .panel-heading {\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-bottom: 20px; /* Added margin bottom for spacing */\r\n  }\r\n\r\n  .content-wrapper {\r\n    background: url(assets/files/wall.jpg) no-repeat center center;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    padding: 20px;\r\n    min-height: calc(100vh - 20px); /* Adjusted to ensure full height minus padding */\r\n    box-sizing: border-box; /* Ensures padding is included in height calculation */\r\n  }\r\n\r\n  .search-inputs {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px; /* Added margin bottom for spacing */\r\n  }\r\n\r\n  .search-inputs .form-control,\r\n  .search-inputs .btn {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .table-responsive {\r\n    margin-top: 20px;\r\n    overflow-x: auto; /* Ensures horizontal scroll if table overflows */\r\n  }\r\n</style>\r\n\r\n<div class=\"content-wrapper\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\">\r\n        <h1 class=\"text-primary font-weight-bold\">{{ 'Supplier List' | translate }}</h1>\r\n      </div>\r\n\r\n      <div class=\"row search-inputs justify-content-center\">\r\n        <div class=\"col-md-3\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.name\"\r\n            placeholder=\"{{ 'Search Name' | translate }}\" (input)=\"validateInput($event, 'name')\">\r\n          <div *ngIf=\"!isValidNameInput\" class=\"text-danger\">{{ nameErrorMessage }}</div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.searchParams.registrationDate\"\r\n            (ngModelChange)=\"formatDate($event)\" placeholder=\"{{ 'Search registrationDate' | translate }}\">\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"form.searchParams.paymentTerm\"\r\n            placeholder=\"{{ 'Search paymentTerm' | translate }}\">\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <select class=\"form-control\" name=\"categoryId\" [(ngModel)]=\"form.searchParams.categoryId\">\r\n            <option [ngValue]=\"undefined\">{{ 'Select category' | translate }}</option>\r\n            <option *ngFor=\"let obj of form.preload.categoryList\" [value]=\"obj.key\">{{ obj.value }}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row mt-2 justify-content-center\">\r\n        <div class=\"col-md-2\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary btn-block\">{{ 'Search' | translate }}</button>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <button (click)=\"forward('/supplier')\" type=\"button\" class=\"btn btn-success btn-block\">{{ 'Add supplier' | translate }}</button>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger btn-block\">{{ 'Delete' | translate }}</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"form.error || form.message\" class=\"row mt-2 justify-content-center\">\r\n        <div class=\"col-md-6\">\r\n          <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{ form.message }}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{ form.message }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-responsive mt-3\">\r\n        <table class=\"table table-bordered table-hover font-weight-bold text-dark\">\r\n          <thead class=\"thead-dark text-uppercase\">\r\n            <tr align=\"center\">\r\n              <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" (change)=\"checkUncheckAll($event)\" /></th>\r\n              <th>{{ 'S.No' }}</th>\r\n              <th>{{ 'Name' }}</th>\r\n              <th>{{ 'Payment Term' }}</th>\r\n              <th>{{ 'Registration Date' }}</th>\r\n              <th>{{ 'Category' }}</th>\r\n              <th>{{ 'Edit' }}</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n              <td><input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" [id]=\"m.id\" /></td>\r\n              <td>{{ (form.pageNo * 5) + i + 1 }}</td>\r\n              <td>{{ m.name }}</td>\r\n              <td>{{ m.paymentTerm }}</td>\r\n              <td>{{ convertToLocalDate(m.registrationDate) }}</td>\r\n              <td>{{ m.categoryName }}</td>\r\n              <td>\r\n                <button class=\"fa fa-edit text-primary\" id=\"nnn\" (click)=\"forward('/supplier/' + m.id)\"></button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <div class=\"d-flex justify-content-between mt-3\">\r\n        <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{ 'Previous' | translate }}</button>\r\n        <div *ngIf=\"form.list.length == 0\">\r\n          <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/supplierlist']\" (click)=\"exit()\">{{ 'Back' | translate }}</a>\r\n        </div>\r\n        <button (click)=\"next()\" [disabled]=\"nextList == 0\" class=\"btn btn-info\">{{ 'Next' | translate }}</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/supplier/supplierlist.component.ts":
/*!****************************************************!*\
  !*** ./src/app/supplier/supplierlist.component.ts ***!
  \****************************************************/
/*! exports provided: SupplierlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierlistComponent", function() { return SupplierlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var SupplierlistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SupplierlistComponent, _super);
    function SupplierlistComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.SUPPLIER, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null },
            inputerror: {},
            searchParams: {
                name: '',
                paymentTerm: '',
                registrationdate: '',
                categoryId: '',
                date: ''
            },
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        _this.isValidMobileInput = true;
        _this.isValidNameInput = true;
        _this.nameErrorMessage = '';
        _this.mobileErrorMessage = '';
        return _this;
    }
    SupplierlistComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    // Format date function
    SupplierlistComponent.prototype.formatDate = function (event) {
        var selectedDate = new Date(event);
        var formattedDate = selectedDate.toISOString().split('T')[0]; // Ensure it's in ISO format
        this.form.searchParams.date = formattedDate;
    };
    // Convert date to local format for display
    SupplierlistComponent.prototype.convertToLocalDate = function (dateString) {
        var date = new Date(dateString);
        // Format date to 'MM/DD/YYYY'
        var options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return date.toLocaleDateString(undefined, options);
    };
    // Validate input for name and mobile fields
    SupplierlistComponent.prototype.validateInput = function (event, field) {
        var value = event.target.value;
        if (field === 'mobile') {
            this.isValidMobileInput = /^[0-9]*$/.test(value); // Check if the input contains only numbers
            if (!this.isValidMobileInput) {
                this.mobileErrorMessage = 'Please type numbers only';
            }
            else {
                this.mobileErrorMessage = '';
            }
        }
        else if (field === 'name') {
            this.isValidNameInput = /^[A-Za-z\s]*$/.test(value); // Check if the input contains only letters and spaces
            if (!this.isValidNameInput) {
                this.nameErrorMessage = 'Please type alphabets only';
            }
            else {
                this.nameErrorMessage = '';
            }
        }
    };
    // Submit method
    SupplierlistComponent.prototype.submit = function () {
        // Reset page number before searching
        this.form.pageNo = 0;
        // Call the search method after formatting the date
        this.search();
    };
    // Search method
    SupplierlistComponent.prototype.search = function () {
        // Clear previous search message
        this.form.searchMessage = null;
        // Perform the search operation with the search parameters
        _super.prototype.search.call(this);
    };
    SupplierlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-supplierlist',
            template: __webpack_require__(/*! ./supplierlist.component.html */ "./src/app/supplier/supplierlist.component.html"),
            styles: [__webpack_require__(/*! ./supplierlist.component.css */ "./src/app/supplier/supplierlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], SupplierlistComponent);
    return SupplierlistComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/timetable/timetable-list.component.html":
/*!*********************************************************!*\
  !*** ./src/app/timetable/timetable-list.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"content-wrapper\" style=\"padding-top: 3%; padding-bottom: 15%; \r\nbackground: url(assets/files/gettyimages-1132439283-640x640.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: 90vh;\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\" style=\"height: 50px;\">\r\n        <div class=\"text-center\">\r\n          <h1 class=\"text-primary font-weight-bold\">{{'TimeTable List' | translate }}</h1>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row p-1\">\r\n        <div class=\"col-sm-1\"></div>\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.subjectName\"\r\n            placeholder=\"{{'Search Subject' | translate}}\">\r\n\r\n        </div>\r\n        <!-- <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.loginId\" placeholder=\"{{'Search Email' | translate}}\">\r\n        </div> -->\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.courseName\"\r\n            placeholder=\"{{'Search Course' | translate}}\">\r\n\r\n        </div>\r\n\r\n        \r\n        <div class=\"col-sm-2\">\r\n          <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.status\" placeholder=\"{{'Search Status' | translate}}\"> -->\r\n        </div>\r\n        <div class=\"col-sm-1 ml-3\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\r\n            {{'Search' | translate }}</button>\r\n        </div>\r\n        <div class=\"col-lg-2 ml-4\">\r\n          <button (click)=\"forward('/timetable')\" type=\"button\" class=\"btn btn-success\">{{'Add TimeTable' | translate}}\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n            {{'Delete'| translate}}</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-striped table-hover\">\r\n            <thead class=\"thead-light text-uppercase\">\r\n              <tr>\r\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\"\r\n                    (change)=\"checkUncheckAll($event)\" /></th>\r\n\r\n                <th>{{'S.No.' | translate }}</th>\r\n                <th>{{'Semester' | translate }}</th>\r\n                <th>{{'ExamDate' | translate }}</th>\r\n                <th>{{'ExamTime' | translate }}</th>\r\n                <th>{{'Course' | translate }}</th>\r\n                <th>{{'Subject' | translate }}</th>\r\n                <th>{{'Description' | translate }}</th>\r\n                <th>{{'Edit' | translate}}</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              \r\n              <tr *ngFor=\"let m of form.list; let i = index;\">\r\n                <td> <input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" id=\"{{m.id}}\" value=\"{{isMasterSel}}\" />\r\n                </td>\r\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\r\n                <td> {{ m.semester }} </td>\r\n                <td> {{ m.examDate | date : 'dd-MM-yyyy' }} </td>\r\n                <td> {{ m.examTime }} </td>\r\n                <td> {{ m.courseName }} </td>\r\n                <td> {{ m.subjectName }} </td>\r\n                <td> {{ m.description }} </td>\r\n                <td>\r\n                  <a (click)=\"forward( '/timetable/' +  m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-edit text-info\"></i>\r\n                  </a>\r\n                  <!-- /\r\n                    <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\r\n                      <i class=\"fa fa-trash text-danger\"></i>\r\n                    </a>\r\n                  </td> -->\r\n\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <table style=\"width: 100%;\">\r\n            <tr>\r\n              <td style=\"width: 50%;\">\r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\r\n            }} </button></td>\r\n            <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\r\n            <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><a class=\"btn btn-warning mr-1\" [routerLink]=\"['/timetablelist']\"  (click)=\"exit()\">{{'Back' | translate}}</a></td>\r\n\r\n\r\n        \r\n            <td><button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\r\n              translate }}</button></td>\r\n            </tr>\r\n            </table>\r\n\r\n              \r\n            \r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/timetable/timetable-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/timetable/timetable-list.component.ts ***!
  \*******************************************************/
/*! exports provided: TimetableListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimetableListComponent", function() { return TimetableListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");





var TimetableListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TimetableListComponent, _super);
    function TimetableListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.TIMETABLE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        var ppSize = 0;
        return _this;
    }
    TimetableListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timetable-list',
            template: __webpack_require__(/*! ./timetable-list.component.html */ "./src/app/timetable/timetable-list.component.html"),
            styles: [__webpack_require__(/*! ./timetable.component.css */ "./src/app/timetable/timetable.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], TimetableListComponent);
    return TimetableListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/timetable/timetable.component.css":
/*!***************************************************!*\
  !*** ./src/app/timetable/timetable.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpbWV0YWJsZS90aW1ldGFibGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/timetable/timetable.component.html":
/*!****************************************************!*\
  !*** ./src/app/timetable/timetable.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  .grad{\r\n background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n background-repeat: no repeat;\r\n background-size: 100%;\r\n padding-bottom: 25px\r\n ;\r\n }\r\n</style>\r\n\r\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:3%;\r\nbackground: url(assets/files/wall.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Add TimeTable' | translate }}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Update TimeTable' | translate }}</h2>\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Course' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"courseId\" [(ngModel)]=\"form.data.courseId\"\r\n                  style=\"cursor: pointer;\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{' Select Course' | translate }}</option>\r\n                  <option *ngFor=\"let obj of form.preload.courseList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          \r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Subject' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-globe grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"subjectId\" [(ngModel)]=\"form.data.subjectId\" style=\"cursor: pointer;\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{' Select Subject' | translate }}</option>\r\n            \r\n                  <option *ngFor=\"let obj of form.preload.subjectList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n                </select>\r\n              </div>\r\n              <span class=\"alertRedColor\"> {{form.inputerror.subject}} </span>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Semester' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-list-ol grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"semester\" [(ngModel)]=\"form.data.semester\" style=\"cursor: pointer;\">\r\n                  <option [ngValue]=\"\" value=\"undefined\"> {{'Please select' | translate}} </option>\r\n                  <option value=\"1 Semester\">1 Semester</option>\r\n                  <option value=\"2 Semester\">2 Semester</option>\r\n                  <option value=\"3 Semester\">3 Semester</option>\r\n                  <option value=\"4 Semester\">4 Semester</option>\r\n                  <option value=\"5 Semester\">5 Semester</option>\r\n                  <option value=\"6 Semester\">6 Semester</option>\r\n                  <option value=\"7 Semester\">7 Semester</option>\r\n                  <option value=\"8 Semester\">8 Semester</option>\r\n                </select>\r\n              </div>\r\n              <span class=\"alertRedColor\"> {{form.inputerror.semester}} </span>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Exam Date' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"date\" name=\"examDate\" [value]=\"form.data.examDate | date:'yyyy-MM-dd'\"\r\n                (input)=\"form.data.examDate=parseDate($event.target.value)\"\r\n                class=\"form-control form-control-sm\" required />\r\n              </div>\r\n              <span class=\"alertRedColor\"> {{form.inputerror.examDate}} </span>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Exam Time' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-clock-o grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"examTime\" [(ngModel)]=\"form.data.examTime\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{' Select examTime' | translate }}</option>\r\n            \r\n                  <option selected disabled>{{'Please select' | translate }}</option>\r\n                  <option value=\"08:00 AM to 11:00 AM\">08:00 AM to 11:00 AM</option>\r\n                  <option value=\"12:00PM to 3:00PM\">12:00PM to 3:00PM</option>\r\n                  <option value=\"3:00PM to 6:00PM\">3:00PM to 6:00PM</option>\r\n                </select>\r\n              </div>\r\n              <span class=\"alertRedColor\"> {{form.inputerror.examTime}} </span>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span><b>{{'Description' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text \"></i> </div>\r\n                </div>\r\n                <textarea  name=\"description\" [(ngModel)]=\"form.data.description\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Description' | translate }}\"></textarea>\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\">{{form.inputerror.description}}</span>\r\n          </div>\r\n\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\"  (click)=\"submit()\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate }}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button  *ngIf=\"form.data.id>0\"  (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n              {{'Update' | translate }}</button>\r\n            </div>\r\n           \r\n           \r\n            <div class=\"pl-3 pt-2\">\r\n              <button (click)=\"forward('/timetablelist')\" type=\"button\" class=\"btn btn-warning mr-1\">{{'List' | translate }}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div><app-footer></app-footer>"

/***/ }),

/***/ "./src/app/timetable/timetable.component.ts":
/*!**************************************************!*\
  !*** ./src/app/timetable/timetable.component.ts ***!
  \**************************************************/
/*! exports provided: TimetableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimetableComponent", function() { return TimetableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var TimetableComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TimetableComponent, _super);
    function TimetableComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.TIMETABLE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    TimetableComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    TimetableComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.semester);
        flag = flag && validator.isNotNullObject(form.examDate);
        console.log(form.examDate);
        flag = flag && validator.isNotNullObject(form.examTime);
        flag = flag && validator.isNotNullObject(form.courseId);
        flag = flag && validator.isNotNullObject(form.subjectId);
        flag = flag && validator.isNotNullObject(form.description);
        return flag;
    };
    TimetableComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.courseId = data.courseId;
        form.subjectId = data.subjectId;
        form.semester = data.semester;
        form.examDate = data.examDate;
        form.examTime = data.examTime;
        form.description = data.description;
        console.log('Populated Form', form);
    };
    TimetableComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    TimetableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timetable',
            template: __webpack_require__(/*! ./timetable.component.html */ "./src/app/timetable/timetable.component.html"),
            styles: [__webpack_require__(/*! ./timetable.component.css */ "./src/app/timetable/timetable.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], TimetableComponent);
    return TimetableComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/transactions/transactions.component.css":
/*!*********************************************************!*\
  !*** ./src/app/transactions/transactions.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/transactions/transactions.component.html":
/*!**********************************************************!*\
  !*** ./src/app/transactions/transactions.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n\r\n  .input-group-addon {\r\n    box-shadow: 9px 8px 7px #001a33;\r\n  }\r\n\r\n  .required-field {\r\n    color: red;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .alertRedColor {\r\n    color: red;\r\n  }\r\n\r\n  .card-body {\r\n    padding: 2rem;\r\n  }\r\n\r\n  .input-group-text i {\r\n    width: 1.5rem;\r\n  }\r\n\r\n  .btn-primary,\r\n  .btn-success,\r\n  .btn-warning {\r\n    width: 100%;\r\n  }\r\n\r\n  .form-control {\r\n    height: calc(2.25rem + 2px);\r\n  }\r\n\r\n  .form-group {\r\n    margin-bottom: 1.5rem;\r\n  }\r\n\r\n  .input-group-prepend .input-group-text {\r\n    background-color: #e9ecef;\r\n    border: 1px solid #ced4da;\r\n  }\r\n\r\n  .input-group-prepend .input-group-text i {\r\n    color: #495057;\r\n  }\r\n\r\n  .row {\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n  }\r\n\r\n  .textarea-height {\r\n    height: 100px;\r\n  }\r\n\r\n  .card {\r\n    margin: auto;\r\n    max-width: 500px;\r\n  }\r\n</style>\r\n\r\n<div class=\"container-fluid\"\r\n  style=\"padding: 2% 0; background: url('assets/files/wall.jpg') no-repeat center center; background-attachment: fixed; background-size: cover; width: 100%; height: auto;\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body input-group-addon grad\">\r\n          <form name=\"userForm\">\r\n            <h2 *ngIf=\"!form.data.id\" class=\"text-primary font-weight-bold text-center\">{{ 'Add Transactions' |\r\n              translate }}</h2>\r\n            <h2 *ngIf=\"form.data.id\" class=\"text-primary font-weight-bold text-center\">{{ 'Update Transactions' |\r\n              translate }}</h2>\r\n\r\n            <div *ngIf=\"!form.error && form.message == 'Data is saved'\" class=\"alert alert-success alert-dismissible\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n              {{ form.message }}\r\n            </div>\r\n\r\n            <div *ngIf=\"form.error && form.message\" class=\"alert alert-danger alert-dismissible\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n              {{ form.message }}\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'AccountId' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-flag grey-text\"></i></div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"accountIdId\" [(ngModel)]=\"form.data.accountIdId\"\r\n                  aria-label=\"ngSelected\">\r\n                  <option [ngValue]=\"undefined\">{{ 'Select accountId' | translate }}</option>\r\n                  <option *ngFor=\"let obj of form.preload.accountIdList\" [value]=\"obj.key\">{{ obj.key }}</option>\r\n                </select>\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.accountIdId\" class=\"alertRedColor\">{{form.inputerror.accountIdId}}</span>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Transaction Type' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-flag grey-text\"></i></div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"transactionType\" [(ngModel)]=\"form.data.transactionTypeId\"\r\n                  aria-label=\"ngSelected\">\r\n                  <option [ngValue]=\"undefined\">{{ 'Select transactionType' | translate }}</option>\r\n                  <option *ngFor=\"let obj of form.preload.transactionTypeList\" [value]=\"obj.key\">{{ obj.value }}</option>\r\n                </select>\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.transactionTypeId\"\r\n                class=\"alertRedColor\">{{form.inputerror.transactionTypeId}}</span>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Description' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-align-left grey-text\"></i></div>\r\n                </div>\r\n                <textarea name=\"description\" [(ngModel)]=\"form.data.description\" class=\"form-control textarea-height\"\r\n                  placeholder=\"{{ 'Enter description' | translate }}\"></textarea>\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.description\" class=\"alertRedColor\">{{ form.inputerror.description }}</span>\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Transaction Date' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></div>\r\n                </div>\r\n                <input type=\"date\" name=\"transactionDate\" [value]=\"form.data.transactionDate | date:'yyyy-MM-dd'\"\r\n                  (input)=\"form.data.transactionDate=parseDate($event.target.value)\" class=\"form-control\" required />\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.transactionDate\" class=\"alertRedColor\">{{ form.inputerror.transactionDate\r\n                }}</span>\r\n            </div>\r\n\r\n            <div class=\"row pt-2 pb-3 justify-content-center\">\r\n              <div class=\"col-md-4\">\r\n                <button *ngIf=\"!form.data.id\" (click)=\"onUpload()\" class=\"btn btn-success\">{{ 'Save' | translate\r\n                  }}</button>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <button *ngIf=\"form.data.id\" (click)=\"onUpload()\" class=\"btn btn-success\">{{ 'Update' | translate\r\n                  }}</button>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <a class=\"btn btn-warning\" type=\"button\" [routerLink]=\"['/transactionslist']\">{{ 'List' | translate\r\n                  }}</a>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/transactions/transactions.component.ts":
/*!********************************************************!*\
  !*** ./src/app/transactions/transactions.component.ts ***!
  \********************************************************/
/*! exports provided: TransactionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsComponent", function() { return TransactionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var TransactionsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TransactionsComponent, _super);
    function TransactionsComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.TRANSACTIONS, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.getKey = false;
        _this.selected = null;
        _this.userForm = null;
        return _this;
    }
    TransactionsComponent.prototype.submit = function () {
        var _self = this;
        console.log('in submit');
        console.log(this.form);
        console.log(this.form.data);
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {}; // Clear input errors here
            if (res.success) {
                _self.form.error = false; // Set error to false on success
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("----------Rahul----------.");
                // Clear form data if needed
                // _self.form.data = {};
            }
            else {
                _self.form.error = true;
                if (res.result.inputerror) {
                    _self.form.inputerror = res.result.inputerror;
                }
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    TransactionsComponent.prototype.submit1 = function () {
        var _self = this;
        console.log(this.form + "submit running start");
        console.log(this.form.data + "form data going to be submit");
        this.serviceLocator.httpService.post(this.api.search, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            _self.form.data.id = res.result.data;
            if (res.success) {
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("--------------------.");
            }
            else {
                _self.form.error = true;
                _self.form.inputerror = res.result.inputerror;
                _self.form.message = res.result.message;
            }
            _self.form.data.id = res.result.data;
            console.log('FORM', _self.form);
        });
    };
    TransactionsComponent.prototype.onUpload = function (userform) {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    // validatePaymentTerm() {
    //   const paymentTerm = this.form.data.paymentTerm;
    //   const paymentTermPattern = /^[a-zA-Z ]*$/; // Only allows alphabetic characters and spaces
    //   if (!paymentTermPattern.test(paymentTerm)) {
    //     this.form.inputerror.paymentTerm = 'Invalid payment term';
    //   } else {
    //     delete this.form.inputerror.paymentTerm;
    //   }
    // }
    TransactionsComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.description);
        console.log(form.description);
        flag = flag && validator.isNotNullObject(form.accountIdId);
        console.log(form.accountIdId);
        flag = flag && validator.isNotNullObject(form.transactionTypeId);
        console.log(form.transactionTypeId);
        flag = flag && validator.isNotNullObject(form.transactionDate);
        console.log(form.transactionDate);
        return flag;
    };
    TransactionsComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        console.log(form.id + 'populate form in transactioncomponent');
        form.description = data.description;
        form.transactionTypeId = data.transactionTypeId;
        form.transactionDate = data.transactionDate;
        form.accountIdId = data.accountIdId;
    };
    // validatePhone(event: KeyboardEvent) {
    //   const input = event.key;
    //   // Check if the input is a number or backspace
    //   if ((isNaN(Number(input)) && input !== 'Backspace') || (input === ' ')) {
    //     event.preventDefault();
    //   }
    //   // Limit the input to 10 characters
    //   if (this.form.data.phone && this.form.data.phone.length >= 10 && input !== 'Backspace') {
    //     event.preventDefault();
    //   }
    // }
    // validateAlphabetInput(event) {
    //   const charCode = event.which || event.keyCode;
    //   const charStr = String.fromCharCode(charCode);
    //   // Regular expression to test if the character is a letter
    //   const letterRegex = /^[a-zA-Z\s]+$/;
    //   // Test if the input matches the allowed characters
    //   if (!letterRegex.test(charStr)) {
    //     event.preventDefault();
    //   }
    //   // Optionally, check the entire value against the name format regex
    //   const inputElement = event.target;
    //   const inputValue = inputElement.value + charStr; // Add the current character to the input value
    //   // Regex for valid name format "FirstName LastName"
    //   const nameRegex = /^[A-Z][a-z]+ [A-Z][a-z]+$/;
    //   // Check if the current value matches the valid name format
    //   if (!nameRegex.test(inputValue)) {
    //     // Handle invalid input (e.g., disable submit button, show error message)
    //     // Example:
    //     inputElement.classList.add('invalid'); // Apply CSS class for invalid input
    //   } else {
    //     inputElement.classList.remove('invalid'); // Remove invalid CSS class if format is valid
    //   }
    // }
    TransactionsComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    TransactionsComponent.prototype.test = function () {
    };
    TransactionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-transactions',
            template: __webpack_require__(/*! ./transactions.component.html */ "./src/app/transactions/transactions.component.html"),
            styles: [__webpack_require__(/*! ./transactions.component.css */ "./src/app/transactions/transactions.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], TransactionsComponent);
    return TransactionsComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/transactions/transactionslist.component.css":
/*!*************************************************************!*\
  !*** ./src/app/transactions/transactionslist.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbnNsaXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/transactions/transactionslist.component.html":
/*!**************************************************************!*\
  !*** ./src/app/transactions/transactionslist.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  #nnn {\r\n    background: none;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .panel-heading {\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .search-inputs {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .search-inputs .form-control,\r\n  .search-inputs .btn {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .content-wrapper {\r\n    background: url(assets/files/wall.jpg) no-repeat center center;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    width: auto;\r\n    height: 105vh;\r\n    padding: 20px;\r\n  }\r\n\r\n  .table-responsive {\r\n    margin-top: 20px;\r\n  }\r\n</style>\r\n\r\n<div class=\"content-wrapper\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\">\r\n        <h1 class=\"text-primary font-weight-bold\">{{ 'Transaction List' | translate }}</h1>\r\n      </div>\r\n\r\n      <div class=\"row search-inputs justify-content-center\">\r\n        <div class=\"col-md-3\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.description\"\r\n            placeholder=\"{{ 'Search description' | translate }}\">\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.searchParams.transactionDate\"\r\n            (ngModelChange)=\"formatDate($event)\" placeholder=\"{{ 'Search transactionDate' | translate }}\">\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <select class=\"form-control\" name=\"accountIdId\" [(ngModel)]=\"form.searchParams.accountIdId\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{ 'Select accountId' | translate }}</option>\r\n            <option *ngFor=\"let obj of form.preload.accountIdList\" [value]=\"obj.key\">{{ obj.key }}</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <select class=\"form-control\" name=\"transactionTypeId\" [(ngModel)]=\"form.searchParams.transactionTypeId\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{ 'Select transactionType' | translate }}</option>\r\n            <option *ngFor=\"let obj of form.preload.transactionTypeList\" [value]=\"obj.key\">{{ obj.value }}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row mt-2 justify-content-center\">\r\n        <div class=\"col-md-2\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary btn-block\">{{ 'Search' | translate }}</button>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <button (click)=\"forward('/transactions')\" type=\"button\" class=\"btn btn-success btn-block\">{{ 'Add Transaction'\r\n            | translate }}</button>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger btn-block\">{{ 'Delete' | translate }}</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"form.error || form.message\" class=\"row mt-2 justify-content-center\">\r\n        <div class=\"col-md-6\">\r\n          <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{ form.message }}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{ form.message }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-responsive mt-3\">\r\n        <table class=\"table table-bordered table-hover font-weight-bold text-dark\">\r\n          <thead class=\"thead-dark text-uppercase\">\r\n            <tr align=\"center\">\r\n              <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" (change)=\"checkUncheckAll($event)\" /></th>\r\n              <th>{{ 'S.No' }}</th>\r\n              <th>{{ 'description' }}</th>\r\n              <th>{{ 'accountId' }}</th>\r\n              <th>{{ 'Transaction Date' }}</th>\r\n              <th>{{ 'Transaction Type' }}</th>\r\n              <th>{{ 'Edit' }}</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n              <td><input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" [id]=\"m.id\" /></td>\r\n              <td>{{ (form.pageNo * 5) + i + 1 }}</td>\r\n              <td>{{ m.description }}</td>\r\n              <td>{{ m.accountIdId }}</td>\r\n              <td>{{ convertToLocalDate(m.transactionDate) }}</td>\r\n              <td>{{ m.transactionTypeName }}</td>\r\n              <td>\r\n                <button class=\"fa fa-edit text-primary\" id=\"nnn\" (click)=\"forward('/transactions/' + m.id)\"></button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <div class=\"d-flex justify-content-between mt-3\">\r\n        <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{ 'Previous' | translate }}</button>\r\n        <div *ngIf=\"form.list.length == 0\">\r\n          <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/transactionslist']\" (click)=\"exit()\">{{ 'Back' | translate }}</a>\r\n        </div>\r\n        <button (click)=\"next()\" [disabled]=\"nextList == 0\" class=\"btn btn-info\">{{ 'Next' | translate }}</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/transactions/transactionslist.component.ts":
/*!************************************************************!*\
  !*** ./src/app/transactions/transactionslist.component.ts ***!
  \************************************************************/
/*! exports provided: TransactionslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionslistComponent", function() { return TransactionslistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var TransactionslistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TransactionslistComponent, _super);
    function TransactionslistComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.TRANSACTIONS, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null },
            inputerror: {},
            searchParams: {
                description: '',
                date: '',
                accountIdId: '',
                transactionTypeId: '',
                transactionDate: ''
            },
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        _this.isValidMobileInput = true;
        _this.isValidNameInput = true;
        _this.isValidAllowedSpeed = true;
        _this.nameErrorMessage = '';
        _this.mobileErrorMessage = '';
        _this.allowedSpeedErrorMessage = '';
        return _this;
    }
    TransactionslistComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    // Format date function
    TransactionslistComponent.prototype.formatDate = function (event) {
        var selectedDate = new Date(event);
        var formattedDate = selectedDate.toISOString().split('T')[0];
        this.form.searchParams.date = formattedDate;
    };
    // Convert date to local format for display
    TransactionslistComponent.prototype.convertToLocalDate = function (dateString) {
        var date = new Date(dateString);
        var options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return date.toLocaleDateString(undefined, options);
    };
    // Validate input for name, mobile, and allowedSpeed fields
    TransactionslistComponent.prototype.validateInput = function (event, field) {
        var value = event.target.value;
        if (field === 'mobile') {
            this.isValidMobileInput = /^[0-9]*$/.test(value); // Check if the input contains only numbers
            if (!this.isValidMobileInput) {
                this.mobileErrorMessage = 'Please type numbers only';
            }
            else {
                this.mobileErrorMessage = '';
            }
        }
        else if (field === 'name') {
            this.isValidNameInput = /^[A-Za-z\s]*$/.test(value); // Check if the input contains only letters and spaces
            if (!this.isValidNameInput) {
                this.nameErrorMessage = 'Please type alphabets only';
            }
            else {
                this.nameErrorMessage = '';
            }
        }
        else if (field === 'allowedSpeed') {
            if (value === '') {
                this.isValidAllowedSpeed = true; // Treat empty input as valid
                this.allowedSpeedErrorMessage = '';
            }
            else {
                var speed = parseInt(value, 10);
                this.isValidAllowedSpeed = speed >= 70 && speed <= 150; // Check if the input is between 70 and 150
                if (!this.isValidAllowedSpeed) {
                    this.allowedSpeedErrorMessage = 'Please type a valid allowed speed (70-150)';
                }
                else {
                    this.allowedSpeedErrorMessage = '';
                }
            }
        }
    };
    // Submit method
    TransactionslistComponent.prototype.submit = function () {
        // Reset page number before searching
        this.form.pageNo = 0;
        // Call the search method after formatting the date
        this.search();
    };
    // Search method
    TransactionslistComponent.prototype.search = function () {
        // Clear previous search message
        this.form.searchMessage = null;
        // Perform the search operation with the search parameters
        _super.prototype.search.call(this);
    };
    TransactionslistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-transactionslist',
            template: __webpack_require__(/*! ./transactionslist.component.html */ "./src/app/transactions/transactionslist.component.html"),
            styles: [__webpack_require__(/*! ./transactionslist.component.css */ "./src/app/transactions/transactionslist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], TransactionslistComponent);
    return TransactionslistComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/transportation/transportation.component.css":
/*!*************************************************************!*\
  !*** ./src/app/transportation/transportation.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zcG9ydGF0aW9uL3RyYW5zcG9ydGF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/transportation/transportation.component.html":
/*!**************************************************************!*\
  !*** ./src/app/transportation/transportation.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n\r\n  .input-group-addon {\r\n    box-shadow: 9px 8px 7px #001a33;\r\n  }\r\n\r\n  .required-field {\r\n    color: red;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .alertRedColor {\r\n    color: red;\r\n  }\r\n\r\n  .card-body {\r\n    padding: 2rem;\r\n  }\r\n\r\n  .input-group-text i {\r\n    width: 1.5rem;\r\n  }\r\n\r\n  .btn-primary,\r\n  .btn-success,\r\n  .btn-warning {\r\n    width: 100%;\r\n  }\r\n\r\n  .form-control {\r\n    height: calc(2.25rem + 2px);\r\n  }\r\n\r\n  .form-group {\r\n    margin-bottom: 1.5rem;\r\n  }\r\n\r\n  .input-group-prepend .input-group-text {\r\n    background-color: #e9ecef;\r\n    border: 1px solid #ced4da;\r\n  }\r\n\r\n  .input-group-prepend .input-group-text i {\r\n    color: #495057;\r\n  }\r\n\r\n  .row {\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n  }\r\n\r\n  .textarea-height {\r\n    height: 100px;\r\n  }\r\n\r\n  .card {\r\n    margin: auto;\r\n    max-width: 500px;\r\n  }\r\n</style>\r\n\r\n<div class=\"container-fluid\"\r\n  style=\"padding: 2% 0; background: url('assets/files/wall.jpg') no-repeat center center; background-attachment: fixed; background-size: cover; width: 100%; height: auto;\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body input-group-addon grad\">\r\n          <form name=\"userForm\">\r\n            <h2 *ngIf=\"!form.data.id\" class=\"text-primary font-weight-bold text-center\">{{ 'Add Transportation' |\r\n              translate }}</h2>\r\n            <h2 *ngIf=\"form.data.id\" class=\"text-primary font-weight-bold text-center\">{{ 'Update Transportation' |\r\n              translate }}</h2>\r\n\r\n            <div *ngIf=\"!form.error && form.message == 'Data is saved'\" class=\"alert alert-success alert-dismissible\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n              {{ form.message }}\r\n            </div>\r\n\r\n            <div *ngIf=\"form.error && form.message\" class=\"alert alert-danger alert-dismissible\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n              {{ form.message }}\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Mode' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fas fa-flag\"></i></div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"modeId\" [(ngModel)]=\"form.data.modeId\" aria-label=\"ngSelected\">\r\n                  <option [ngValue]=\"undefined\">{{ 'Select mode' | translate }}</option>\r\n                  <option *ngFor=\"let obj of form.preload.modeList\" [value]=\"obj.key\">{{ obj.value }}</option>\r\n                </select>\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.modeId\" class=\"alertRedColor\">{{ form.inputerror.modeId }}</span>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Description' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-home grey-text\"></i></div>\r\n                </div>\r\n                <textarea name=\"address\" [(ngModel)]=\"form.data.description\" class=\"form-control textarea-height\"\r\n                  placeholder=\"{{ 'Enter Description' | translate }}\"></textarea>\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.description\" class=\"alertRedColor\">{{form.inputerror.description}}</span>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Cost' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fas fa-money-bill-wave\"></i></div>\r\n                </div>\r\n                <input type=\"number\" name=\"cost\" [(ngModel)]=\"form.data.cost\" class=\"form-control\"\r\n                  placeholder=\"{{ 'Enter cost' | translate }}\">\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.cost\" class=\"alertRedColor\">{{ form.inputerror.cost }}</span>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Date' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></div>\r\n                </div>\r\n                <input type=\"date\" name=\"date\" [value]=\"form.data.date | date:'yyyy-MM-dd'\"\r\n                  (input)=\"form.data.date=parseDate($event.target.value)\" class=\"form-control\" required />\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.date\" class=\"alertRedColor\">{{ form.inputerror.date }}</span>\r\n            </div>\r\n\r\n            <div class=\"row pt-2 pb-3 justify-content-center\">\r\n              <div class=\"col-md-4\">\r\n                <button *ngIf=\"!form.data.id\" (click)=\"onUpload()\" class=\"btn btn-success\">{{ 'Save' | translate\r\n                  }}</button>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <button *ngIf=\"form.data.id\" (click)=\"onUpload()\" class=\"btn btn-success\">{{ 'Update' | translate\r\n                  }}</button>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <a class=\"btn btn-warning\" type=\"button\" [routerLink]=\"['/transportationlist']\">{{ 'List' | translate\r\n                  }}</a>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/transportation/transportation.component.ts":
/*!************************************************************!*\
  !*** ./src/app/transportation/transportation.component.ts ***!
  \************************************************************/
/*! exports provided: TransportationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportationComponent", function() { return TransportationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var TransportationComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TransportationComponent, _super);
    function TransportationComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.TRANSPORTATION, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.getKey = false;
        _this.selected = null;
        _this.userForm = null;
        return _this;
    }
    TransportationComponent.prototype.submit = function () {
        var _self = this;
        console.log('in submit');
        console.log(this.form);
        console.log(this.form.data);
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {}; // Clear input errors here
            if (res.success) {
                _self.form.error = false; // Set error to false on success
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("----------Rahul----------.");
                // Clear form data if needed
                // _self.form.data = {};
            }
            else {
                _self.form.error = true;
                if (res.result.inputerror) {
                    _self.form.inputerror = res.result.inputerror;
                }
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    TransportationComponent.prototype.submit1 = function () {
        var _self = this;
        console.log(this.form + "submit running start");
        console.log(this.form.data + "form data going to be submit");
        this.serviceLocator.httpService.post(this.api.search, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            _self.form.data.id = res.result.data;
            if (res.success) {
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("--------------------.");
            }
            else {
                _self.form.error = true;
                _self.form.inputerror = res.result.inputerror;
                _self.form.message = res.result.message;
            }
            _self.form.data.id = res.result.data;
            console.log('FORM', _self.form);
        });
    };
    TransportationComponent.prototype.onUpload = function (userform) {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    TransportationComponent.prototype.validatePaymentTerm = function () {
        var paymentTerm = this.form.data.paymentTerm;
        var paymentTermPattern = /^[a-zA-Z ]*$/; // Only allows alphabetic characters and spaces
        if (!paymentTermPattern.test(paymentTerm)) {
            this.form.inputerror.paymentTerm = 'Invalid payment term';
        }
        else {
            delete this.form.inputerror.paymentTerm;
        }
    };
    TransportationComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.modeId);
        console.log(form.modeId);
        flag = flag && validator.isNotNullObject(form.description);
        console.log(form.description);
        flag = flag && validator.isNotNullObject(form.cost);
        console.log(form.cost);
        flag = flag && validator.isNotNullObject(form.date);
        console.log(form.date);
        return flag;
    };
    TransportationComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        console.log(form.id + 'populate form in shoppingcomponent');
        form.description = data.description;
        form.cost = data.cost;
        form.date = data.date;
        form.modeId = data.modeId;
    };
    TransportationComponent.prototype.validatePhone = function (event) {
        var input = event.key;
        // Check if the input is a number or backspace
        if ((isNaN(Number(input)) && input !== 'Backspace') || (input === ' ')) {
            event.preventDefault();
        }
        // Limit the input to 10 characters
        if (this.form.data.phone && this.form.data.phone.length >= 10 && input !== 'Backspace') {
            event.preventDefault();
        }
    };
    TransportationComponent.prototype.validateAlphabetInput = function (event) {
        var charCode = event.which || event.keyCode;
        var charStr = String.fromCharCode(charCode);
        // Regular expression to test if the character is a letter
        var letterRegex = /^[a-zA-Z\s]+$/;
        // Test if the input matches the allowed characters
        if (!letterRegex.test(charStr)) {
            event.preventDefault();
        }
        // Optionally, check the entire value against the name format regex
        var inputElement = event.target;
        var inputValue = inputElement.value + charStr; // Add the current character to the input value
        // Regex for valid name format "FirstName LastName"
        var nameRegex = /^[A-Z][a-z]+ [A-Z][a-z]+$/;
        // Check if the current value matches the valid name format
        if (!nameRegex.test(inputValue)) {
            // Handle invalid input (e.g., disable submit button, show error message)
            // Example:
            inputElement.classList.add('invalid'); // Apply CSS class for invalid input
        }
        else {
            inputElement.classList.remove('invalid'); // Remove invalid CSS class if format is valid
        }
    };
    TransportationComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    TransportationComponent.prototype.test = function () {
    };
    TransportationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-transportation',
            template: __webpack_require__(/*! ./transportation.component.html */ "./src/app/transportation/transportation.component.html"),
            styles: [__webpack_require__(/*! ./transportation.component.css */ "./src/app/transportation/transportation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], TransportationComponent);
    return TransportationComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/transportation/transportationlist.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/transportation/transportationlist.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zcG9ydGF0aW9uL3RyYW5zcG9ydGF0aW9ubGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/transportation/transportationlist.component.html":
/*!******************************************************************!*\
  !*** ./src/app/transportation/transportationlist.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  /* Adjustments for panel heading and main content wrapper */\r\n  .panel-heading {\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-bottom: 20px;\r\n    /* Added margin bottom for spacing */\r\n  }\r\n\r\n  .content-wrapper {\r\n    background: url(assets/files/wall.jpg) no-repeat center center;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    padding: 20px;\r\n    min-height: calc(100vh - 20px);\r\n    /* Adjusted to ensure full height minus padding */\r\n    box-sizing: border-box;\r\n    /* Ensures padding is included in height calculation */\r\n  }\r\n\r\n  .search-inputs {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    /* Added margin bottom for spacing */\r\n  }\r\n\r\n  .search-inputs .form-control,\r\n  .search-inputs .btn {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .table-responsive {\r\n    margin-top: 20px;\r\n    overflow-x: auto;\r\n    /* Ensures horizontal scroll if table overflows */\r\n  }\r\n</style>\r\n\r\n<div class=\"content-wrapper\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\">\r\n        <h1 class=\"text-primary font-weight-bold\">{{ 'Transportation List' | translate }}</h1>\r\n      </div>\r\n\r\n      <div class=\"row search-inputs justify-content-center\">\r\n        <div class=\"col-md-3\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.description\"\r\n            placeholder=\"{{ 'Search description' | translate }}\">\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.searchParams.date\"\r\n            (ngModelChange)=\"formatDate($event)\" placeholder=\"{{ 'Search date' | translate }}\">\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"form.searchParams.cost\"\r\n            placeholder=\"{{ 'Search cost' | translate }}\" (ngModelChange)=\"validateCost()\">\r\n          <div *ngIf=\"!isValidCost\" class=\"text-danger\">{{ costErrorMessage }}</div>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-md-3\">\r\n          <select class=\"form-control\" name=\"modeId\" [(ngModel)]=\"form.searchParams.modeId\">\r\n            <option [ngValue]=\"undefined\">{{ 'Select mode' | translate }}</option>\r\n            <option *ngFor=\"let obj of form.preload.modeList\" [value]=\"obj.key\">{{ obj.value }}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row mt-2 justify-content-center\">\r\n        <div class=\"col-md-2\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary btn-block\">{{ 'Search' | translate }}</button>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <button (click)=\"forward('/transportation')\" type=\"button\" class=\"btn btn-success btn-block\">{{ 'Add\r\n            transportation' | translate }}</button>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger btn-block\">{{ 'Delete' | translate }}</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"form.error || form.message\" class=\"row mt-2 justify-content-center\">\r\n        <div class=\"col-md-6\">\r\n          <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{ form.message }}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{ form.message }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-responsive mt-3\">\r\n        <table class=\"table table-bordered table-hover font-weight-bold text-dark\">\r\n          <thead class=\"thead-dark text-uppercase\">\r\n            <tr align=\"center\">\r\n              <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\"\r\n                  (change)=\"checkUncheckAll($event)\" /></th>\r\n              <th>{{ 'S.No' }}</th>\r\n              <th>{{ 'Description' }}</th>\r\n              <th>{{ 'Cost' }}</th>\r\n              <th>{{ 'Date' }}</th>\r\n              <th>{{ 'Mode' }}</th>\r\n              <th>{{ 'Edit' }}</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n              <td><input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" [id]=\"m.id\" /></td>\r\n              <td>{{ (form.pageNo * 5) + i + 1 }}</td>\r\n              <td>{{ m.description }}</td>\r\n              <td>{{ m.cost }}</td>\r\n              <td>{{ convertToLocalDate(m.date) }}</td>\r\n              <td>{{ m.modeName }}</td>\r\n              <td>\r\n                <button class=\"fa fa-edit text-primary\" id=\"nnn\" (click)=\"forward('/transportation/' + m.id)\"></button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <div class=\"d-flex justify-content-between mt-3\">\r\n        <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{ 'Previous' | translate\r\n          }}</button>\r\n        <div *ngIf=\"form.list.length == 0\">\r\n          <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/transportationlist']\" (click)=\"exit()\">{{ 'Back' | translate\r\n            }}</a>\r\n        </div>\r\n        <button (click)=\"next()\" [disabled]=\"nextList == 0\" class=\"btn btn-info\">{{ 'Next' | translate }}</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/transportation/transportationlist.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/transportation/transportationlist.component.ts ***!
  \****************************************************************/
/*! exports provided: TransportationlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportationlistComponent", function() { return TransportationlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var TransportationlistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TransportationlistComponent, _super);
    function TransportationlistComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.TRANSPORTATION, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null },
            inputerror: {},
            searchParams: {
                name: '',
                cost: '',
                date: '',
                modeId: '',
            },
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        _this.isValidCost = true;
        _this.costErrorMessage = '';
        return _this;
    }
    TransportationlistComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    // Format date function
    TransportationlistComponent.prototype.formatDate = function (event) {
        var selectedDate = new Date(event);
        var formattedDate = selectedDate.toISOString().split('T')[0]; // Ensure it's in ISO format
        this.form.searchParams.date = formattedDate;
    };
    // Convert date to local format for display
    TransportationlistComponent.prototype.convertToLocalDate = function (dateString) {
        var date = new Date(dateString);
        // Format date to 'MM/DD/YYYY'
        var options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return date.toLocaleDateString(undefined, options);
    };
    TransportationlistComponent.prototype.validateCost = function () {
        var cost = this.form.searchParams.cost;
        var costValue = Number(cost);
        if (!cost || isNaN(costValue) || costValue <= 0 || costValue > 5000000) {
            this.isValidCost = false;
            this.costErrorMessage = 'Please enter valid cost value';
        }
        else {
            this.isValidCost = true;
            this.costErrorMessage = '';
        }
    };
    // Submit method
    TransportationlistComponent.prototype.submit = function () {
        // Reset page number before searching
        this.form.pageNo = 0;
        // Call the search method after formatting the date
        this.search();
    };
    // Search method
    TransportationlistComponent.prototype.search = function () {
        // Clear previous search message
        this.form.searchMessage = null;
        // Perform the search operation with the search parameters
        _super.prototype.search.call(this);
    };
    TransportationlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-transportationlist',
            template: __webpack_require__(/*! ./transportationlist.component.html */ "./src/app/transportation/transportationlist.component.html"),
            styles: [__webpack_require__(/*! ./transportationlist.component.css */ "./src/app/transportation/transportationlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], TransportationlistComponent);
    return TransportationlistComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/user/changepassword.component.html":
/*!****************************************************!*\
  !*** ./src/app/user/changepassword.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n.grad{\r\n  background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n  background-repeat: no repeat;\r\n  background-size: 100%;\r\n  padding-bottom: 10px;\r\n  }\r\n  </style>\r\n<div class=\"row \" style=\"padding-top: 10%; padding-bottom: 5%;\r\n background: url(assets/files/wall.jpg);\r\n  background-attachment: fixed;\r\n  background-size: cover; width:auto;\r\n    height: auto;\">\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <h2  class=\"text-primary font-weight-bold\">{{'Change Password' | translate }}</h2>\r\n    \r\n\r\n          <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Old Password' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-key grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"password\" name=\"oldPassword\" [(ngModel)]=\"form.data.oldPassword\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Old Password' | translate}}\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        <span class=\"alertRedColor\">{{form.inputerror.name}}</span>\r\n        \r\n        <div style=\"padding-top:3%\">\r\n            <span><b>{{'New Password' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-unlock-alt grey-text \"></i> </div>\r\n                </div>\r\n                <input type=\"password\" name=\"newPassword\" [(ngModel)]=\"form.data.newPassword\" class=\"form-control\"\r\n                placeholder=\"{{'Enter New Password' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\">{{form.inputerror.description}}</span>\r\n          </div>\r\n          <div style=\"padding-top:3%\">\r\n            <span><b>Confirm Password</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-unlock grey-text \"></i> </div>\r\n                </div>\r\n                <input type=\"password\" name=\"confirmPassword\" [(ngModel)]=\"form.data.confirmPassword\" class=\"form-control\"\r\n                placeholder=\"{{'Confirm Password' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\">{{form.inputerror.confirmPassword}}</span>\r\n          </div>\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button   (click)=\"changePassword()\" class=\"btn btn-success mr-2\">\r\n               {{'Update' | translate}} </button>\r\n            </div>\r\n            <input type=\"hidden\" name=\"loginId\" [(ngModel)]=\"form.data.confirmPassword\">\r\n            \r\n          </div>\r\n        </form>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div><app-footer></app-footer>"

/***/ }),

/***/ "./src/app/user/changepassword.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user/changepassword.component.ts ***!
  \**************************************************/
/*! exports provided: ChangepasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordComponent", function() { return ChangepasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");






var ChangepasswordComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ChangepasswordComponent, _super);
    function ChangepasswordComponent(locator, route, httpService) {
        var _this = _super.call(this, locator.endpoints.USER, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpService = httpService;
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null, loginId: null },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        return _this;
    }
    ChangepasswordComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.oldPassword);
        flag = flag && validator.isNotNullObject(form.newPassword);
        flag = flag && validator.isNotNullObject(form.confirmPassword);
        return flag;
    };
    ChangepasswordComponent.prototype.changePassword = function () {
        var _self = this;
        this.form.data.loginId = localStorage.getItem("loginId");
        this.httpService.post("http://localhost:8084/User/changepassword", this.form.data, function (res) {
            if (res.success) {
                _self.form.list = res.result.data;
                _self.form.message = res.result.message;
            }
        });
    };
    ChangepasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-changepassword',
            template: __webpack_require__(/*! ./changepassword.component.html */ "./src/app/user/changepassword.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _http_service_service__WEBPACK_IMPORTED_MODULE_5__["HttpServiceService"]])
    ], ChangepasswordComponent);
    return ChangepasswordComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseCtl"]));



/***/ }),

/***/ "./src/app/user/myprofile.component.html":
/*!***********************************************!*\
  !*** ./src/app/user/myprofile.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:3%; \r\nbackground: url(assets/files/edc.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg\">\r\n        <form name=\"myProfile\">\r\n          <h2 class=\"text-primary font-weight-bold\">{{'My Profile'  | translate }}</h2>\r\n         \r\n\r\n          <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n          \r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'First Name'  | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"fn\" [(ngModel)]=\"form.data.firstName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter First Name'  | translate }}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.firstName}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Last Name'  | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"ln\" [(ngModel)]=\"form.data.lastName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Last Name'  | translate }}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.lastName}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'login Id'  | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"loginId\" [(ngModel)]=\"form.data.loginId\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Login Id'  | translate }}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.state}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Password'  | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"password\" name=\"pwd\" [(ngModel)]=\"form.data.password\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Password'  | translate }}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.password}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Mobile'  | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"phone\" [(ngModel)]=\"form.data.phone\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Mobile Number' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.phone}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Alternate Mobile'  | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"alternateMobile\" [(ngModel)]=\"form.data.alternateMobile\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Alternate Number' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.phone}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'DOB'  | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"date\" name=\"dob\" [value]=\"form.data.dob | date:'yyyy-MM-dd'\"\r\n                (input)=\"form.data.dob=parseDate($event.target.value)\"\r\n                class=\"form-control form-control-sm\" required />\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.dob}} </span>\r\n          </div>\r\n          \r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Gender'  | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"gender\" id=\"gender\" [(ngModel)]=\"form.data.gender\"\r\n                  style=\"cursor: pointer;\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{'Please select'  | translate }}</option>\r\n                  <option value=\"Male\">{{'Male'  | translate }} </option>\r\n                  <option value=\"Female\">{{'Female'  | translate }} </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Image'  | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"file\" id=\"customFile\" name=\"imageId\"\r\n                  (change)=\"onFileSelect($event.target.files)\" accept=\"image/*\">\r\n\r\n                <span class=\"alertRedColor\"> {{form.inputerror.image}} </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Status' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" id=\"status\" name=\"status\" [(ngModel)]=\"form.data.status\" readonly>\r\n\r\n                  <option value=\"Active\">{{'Active'  | translate }} </option>\r\n                  <option value=\"Inactive\">{{'Inactive'  | translate }} </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            \r\n\r\n            <div class=\"pt-2\">\r\n              <button (click)=\"onUpload()\" class=\"btn btn-success mr-2\">\r\n                {{'Update' | translate }}</button>\r\n            </div>\r\n            \r\n          </div>\r\n\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/user/myprofile.component.ts":
/*!*********************************************!*\
  !*** ./src/app/user/myprofile.component.ts ***!
  \*********************************************/
/*! exports provided: MyprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyprofileComponent", function() { return MyprofileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var MyprofileComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MyprofileComponent, _super);
    function MyprofileComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.USER, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        return _this;
    }
    MyprofileComponent.prototype.ngOnInit = function () {
    };
    MyprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-myprofile',
            template: __webpack_require__(/*! ./myprofile.component.html */ "./src/app/user/myprofile.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], MyprofileComponent);
    return MyprofileComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/user/user-list.component.html":
/*!***********************************************!*\
  !*** ./src/app/user/user-list.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-navbar></app-navbar>\r\n<style>\r\n#nnn{\r\n  background: none;\r\n  border: none;\r\n}\r\n\r\n</style> \r\n\r\n<div class=\"content-wrapper\"\r\nstyle=\"\r\nbackground: url(assets/files/wall.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: 105vh;\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\" style=\"height: 50px;\">\r\n        <!-- <div class=\"col-sm-5\"> -->\r\n        <div class=\"text-center\">\r\n          <h1 class=\"text-primary font-weight-bold\">{{'User List' | translate }}</h1>\r\n        </div>\r\n      </div>\r\n      <!-- <button class=\"filebtn third\">Button 3</button> -->\r\n      <div class=\"row p-1\">\r\n        <div class=\"col-sm-1\"></div>\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.firstName\"\r\n            placeholder=\"{{'Search First Name' | translate}}\">\r\n\r\n        </div>\r\n\r\n\r\n        <!-- <div class=\"col-sm-2\">\r\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.searchParams.dob\"\r\n            placeholder=\"{{'Search dob' | translate}}\">\r\n\r\n        </div> -->\r\n        \r\n        <!-- <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.loginId\" placeholder=\"{{'Search Email' | translate}}\">\r\n        </div> -->\r\n        <div class=\"col-sm-2\">\r\n\r\n          <select class=\"form-control\" name=\"roleId\" [(ngModel)]=\"form.searchParams.roleId\" aria-label=\"ngSelected\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{' Select Role' | translate }}</option>\r\n            <option *ngFor=\"let obj of form.preload.roleList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n          <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.status\" placeholder=\"{{'Search Status' | translate}}\"> -->\r\n        </div>\r\n        <div class=\"col-sm-1 ml-3\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\r\n            {{'Search' | translate }}</button>\r\n        </div>\r\n        &nbsp;&nbsp;&nbsp;\r\n        <div class=\"col-lg-2 ml-4\">\r\n          <button (click)=\"forward('/user')\" type=\"button\" class=\"btn btn-success\">{{'Add User' | translate}}\r\n          </button>\r\n        </div>\r\n        \r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n            {{'Delete'| translate}}</button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n\r\n          <table class=\"table table-bordered table-hover font-weight-bold text-dark\">\r\n            <thead class=\"thead-dark text-uppercase \">\r\n              <tr align=\"center\">\r\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\"  name=\"list_name\" value=\"h1\" \r\n                    (change)=\"checkUncheckAll($event)\" /></th>\r\n                <th>{{'S.No' | translate}}</th>\r\n                <th>{{'Image' | translate}}</th>\r\n                <th>{{'First Name' | translate}}</th>\r\n                <th>{{'Last Name' | translate}}</th>\r\n                <th>{{'Login' | translate}}</th>\r\n                <th>{{'Status' | translate}}</th>\r\n                <th>{{'Role' | translate}}</th>\r\n                <th>{{'Phone' | translate}}</th>\r\n                <th>{{'DOB' | translate}}</th>\r\n                <th>{{'Edit' | translate}}</th>\r\n              </tr>\r\n\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n                <td> <input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" [disabled]=\"m.roleName=='Admin'\" name=\"list_name\" id=\"{{m.id}}\" value=\"{{isMasterSel}}\" />\r\n                </td>\r\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\r\n\r\n                \r\n                <td>\r\n                  <div *ngIf=\"m.imageId\"> \r\n                    <img src=\"http://localhost:8084/User/profilePic/{{m.id}}\" height=\"55px\" width=\"80px\">\r\n                  </div>\r\n                  <div *ngIf=\"!m.imageId\">\r\n                    <img src=\"../../assets/files/default.jpg\" height=\"55px\" width=\"80px\">\r\n                  </div>\r\n                </td>\r\n\r\n                <td> {{ m.firstName }} </td>\r\n                <td> {{ m.lastName }} </td>\r\n                <td> {{ m.loginId }} </td>\r\n                <td> {{ m.status }} </td>\r\n                <td> {{ m.roleName }} </td>\r\n                <td> {{ m.phone }} </td>\r\n                <td> {{ m.dob | date : 'dd-MM-yyyy'}} </td>\r\n                <td>\r\n\r\n                  <button  class=\"fa fa-edit text-primary \" id=\"nnn\" [disabled]=\"m.roleName=='Admin'\" (click)=\"forward( '/user/' +  m.id)\" style=\"\r\n                  cursor: pointer;\"></button>\r\n                  <!-- <a (click)=\"forward( '/user/' +  m.id)\" style=\"\r\n                    cursor: pointer;\">\r\n                    <i class=\"fa fa-edit text-primary\"></i>\r\n                  </a> -->\r\n                  <!-- /\r\n                  <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-trash text-danger \"></i>\r\n                  </a> -->\r\n\r\n                </td>\r\n              </tr>\r\n\r\n\r\n\r\n\r\n            </tbody>\r\n\r\n          </table>\r\n          <table style=\"width: 100%;\">\r\n            <tr>\r\n              <td style=\"width: 50%;\">\r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\r\n            }} </button></td>\r\n\r\n            <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\r\n            <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><a class=\"btn btn-warning mr-1\" [routerLink]=\"['/userlist']\" (click)=\"exit()\">{{'Back' | translate}}</a></td>\r\n\r\n\r\n        \r\n            <td><button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\r\n              translate }}</button></td>\r\n            </tr>\r\n            </table>\r\n\r\n\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/user/user-list.component.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user-list.component.ts ***!
  \*********************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var UserListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserListComponent, _super);
    function UserListComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.USER, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.myKey = "";
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        return _this;
    }
    UserListComponent.prototype.createImageFromBlob = function (image) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            _this.imageToShow = reader.result;
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
    };
    UserListComponent.prototype.getImage = function (id) {
        var _this = this;
        //Make a call to Sprinf Boot to get the Image Bytes.
        this.form.data.id = id;
        console.log(this.form.data.id);
        this.httpClient.get('http://localhost:8080/User/profilePic/' + this.form.data.id, { responseType: 'blob' }).subscribe(function (data) {
            _this.createImageFromBlob(data);
            _this.myKey = _this.form.data.id;
        }, function (error) {
            console.log(error);
        });
    };
    UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/user/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], UserListComponent);
    return UserListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertRedColor {\r\n    color: red;\r\n}\r\n\r\n\r\n.required-field::after { \t\t\r\n  content: \"*\";\t\t\r\n  color: red;\t\t\r\n   }\r\n\r\n\r\n.successColor{\r\n    color: green;\r\n   }\r\n\r\n\r\n.btn-space {\r\n    margin-right: 5px;\r\n}\r\n\r\n\r\n.file-btn{\r\n    border: black;\r\n}\r\n\r\n\r\n.third {\r\n    border-color: #b300b3;\r\n    color: #695d29;\r\n    box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;\r\n    transition: all 150ms ease-in-out;\r\n  }\r\n\r\n\r\n.third:hover {\r\n    box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;\r\n  }\r\n\r\n\r\n.filebtn {\r\n    box-sizing: border-box;\r\n    -webkit-appearance: none;\r\n       -moz-appearance: none;\r\n            appearance: none;\r\n    background-color: transparent;\r\n    border: 2px solid #e74c3c;\r\n    border-radius: 0.6em;\r\n    color: #e74c3c;\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-self: center;\r\n    font-size: 1rem;\r\n    font-weight: 400;\r\n    line-height: 1;\r\n    margin: 20px;\r\n    padding: 1.2em 2.8em;\r\n    text-decoration: none;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 700;\r\n  }\r\n\r\n\r\n.filebtn:hover, .filebtn:focus {\r\n    color: #ffffff;\r\n    outline: 0;\r\n  }\r\n  \r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7OztBQUdBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7R0FDVDs7O0FBRUE7SUFDQyxZQUFZO0dBQ2I7OztBQUVBO0lBQ0MsaUJBQWlCO0FBQ3JCOzs7QUFDQTtJQUNJLGFBQWE7QUFDakI7OztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCx3REFBd0Q7SUFFeEQsaUNBQWlDO0VBQ25DOzs7QUFDQTtJQUNFLDBEQUEwRDtFQUM1RDs7O0FBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsd0JBQXdCO09BQ3JCLHFCQUFxQjtZQUNoQixnQkFBZ0I7SUFDeEIsNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLGVBQWU7SUFJZixhQUFhO0lBR0wsa0JBQWtCO0lBQzFCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIscUNBQXFDO0lBQ3JDLGdCQUFnQjtFQUNsQjs7O0FBQ0E7SUFDRSxjQUFjO0lBQ2QsVUFBVTtFQUNaIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnRSZWRDb2xvciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG5cclxuLnJlcXVpcmVkLWZpZWxkOjphZnRlciB7IFx0XHRcclxuICBjb250ZW50OiBcIipcIjtcdFx0XHJcbiAgY29sb3I6IHJlZDtcdFx0XHJcbiAgIH1cdFxyXG5cclxuICAgLnN1Y2Nlc3NDb2xvcntcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgfVxyXG5cclxuICAgLmJ0bi1zcGFjZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4uZmlsZS1idG57XHJcbiAgICBib3JkZXI6IGJsYWNrO1xyXG59XHJcblxyXG4udGhpcmQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYjMwMGIzO1xyXG4gICAgY29sb3I6ICM2OTVkMjk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNDBweCA0MHB4ICMzNDk4ZGIgaW5zZXQsIDAgMCAwIDAgIzM0OThkYjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICAudGhpcmQ6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMCAjMzQ5OGRiIGluc2V0LCAwIDAgMTBweCA0cHggIzM0OThkYjtcclxuICB9XHJcbiAgLmZpbGVidG4ge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2U3NGMzYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNmVtO1xyXG4gICAgY29sb3I6ICNlNzRjM2M7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIC1tcy1mbGV4LWl0ZW0tYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMS4yZW0gMi44ZW07XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG4gIC5maWxlYnRuOmhvdmVyLCAuZmlsZWJ0bjpmb2N1cyB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgfVxyXG4gIFxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n</style>\r\n\r\n<style type=\"text/css\">\r\n  .log1 {\r\n    padding-top: 13%;\r\n  }\r\n\r\n  .input-group-addon {\r\n    box-shadow: 9px 8px 7px #001a33;\r\n\r\n  }\r\n</style>\r\n\r\n<div class=\"row \" style=\"padding-top: 2%; padding-bottom:2%;\r\n\r\nbackground: url(assets/files/wall.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:100%;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body input-group-addon grad \">\r\n        <form name=\"userForm\">\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add User' |\r\n            translate }}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Update User' |\r\n            translate }}</h2>\r\n\r\n\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n          <div>\r\n            <span class=\"pt-2\"><b>{{'Role Name' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\r\n                </div>\r\n\r\n\r\n                <select class=\"form-control\" name=\"roleId\" [(ngModel)]=\"form.data.roleId\" aria-label=\"ngSelected\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{' Select Role' | translate }}</option>\r\n                  <option *ngFor=\"let obj of form.preload.roleList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <span *ngIf=\"form.inputerror.roleId != null\" class=\"alertRedColor\" style=\" color: red;\"> {{'role'|\r\n              translate}} </span>\r\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.roleId}} </span> -->\r\n          </div>\r\n\r\n          <div>\r\n            <span class=\"pt-2\"><b>{{'First Name' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"fn\" [(ngModel)]=\"form.data.firstName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter First Name'  | translate }}\">\r\n              </div>\r\n            </div><span *ngIf=\"form.inputerror.firstName != null\" class=\"alertRedColor\" style=\" color: red;\">\r\n              {{'firstname'| translate}} </span>\r\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.firstName}} </span> -->\r\n          </div>\r\n\r\n          <div>\r\n            <span class=\"pt-2\"><b>{{'Last Name' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"ln\" [(ngModel)]=\"form.data.lastName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Last Name'  | translate }}\">\r\n              </div>\r\n            </div><span *ngIf=\"form.inputerror.lastName != null\" class=\"alertRedColor\" style=\" color: red;\">\r\n              {{'lastname'| translate}} </span>\r\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.lastName}} </span> -->\r\n          </div>\r\n\r\n          <div>\r\n            <span class=\"pt-2\"><b>{{'login Id' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"loginId\" [(ngModel)]=\"form.data.loginId\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Login Id'  | translate }}\">\r\n              </div>\r\n            </div><span *ngIf=\"form.inputerror.loginId != null\" class=\"alertRedColor\" style=\" color: red;\"> {{'email'|\r\n              translate}} </span>\r\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.loginId}} </span> -->\r\n          </div>\r\n\r\n          <div>\r\n            <span class=\"pt-2\"><b>{{'Password' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-key grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"password\" name=\"pwd\" [(ngModel)]=\"form.data.password\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Password'  | translate }}\">\r\n              </div>\r\n            </div><span *ngIf=\"form.inputerror.password != null\" class=\"alertRedColor\" style=\" color: red;\">\r\n              {{'password'| translate}} </span>\r\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.password}} </span> -->\r\n          </div>\r\n\r\n          <div>\r\n            <span class=\"pt-2\"><b>{{'Mobile' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"number\" name=\"phone\" maxlength=\"10\" [(ngModel)]=\"form.data.phone\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Mobile Number' | translate}}\">\r\n              </div>\r\n            </div><span *ngIf=\"form.inputerror.phone != null\" class=\"alertRedColor\" style=\" color: red;\"> {{'phone'|\r\n              translate}} </span>\r\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.phone}} </span> -->\r\n          </div>\r\n\r\n          <div>\r\n            <span class=\"pt-2\"><b>{{'Alternate Mobile' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-mobile grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"number\" name=\"alternateMobile\" maxlength=\"10\" [(ngModel)]=\"form.data.alternateMobile\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Alternate Number' | translate}}\">\r\n              </div>\r\n            </div><span *ngIf=\"form.inputerror.alternateMobile != null\" class=\"alertRedColor\" style=\" color: red;\">\r\n              {{'mobile'| translate}} </span></div>\r\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.alternateMobile}} </span> -->\r\n\r\n\r\n            <div>\r\n         \r\n             <span class=\"pt-2\"><b>{{'DOB' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"date\" name=\"dob\" [value]=\"form.data.dob | date:'yyyy-MM-dd'\"\r\n                  (input)=\"form.data.dob=parseDate($event.target.value)\" class=\"form-control form-control-sm\"\r\n                  required />\r\n              </div>\r\n            </div>\r\n<span *ngIf=\"form.inputerror.dob != null\" class=\"alertRedColor\" style=\" color: red;\"> {{'dob'|\r\n              translate}} </span>\r\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.dob}} </span> -->\r\n          </div>\r\n          <div>\r\n            <span class=\"pt-2\"><b>{{'Gender' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-venus grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"gender\" id=\"gender\" [(ngModel)]=\"form.data.gender\"\r\n                  style=\"cursor: pointer;\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{'Please select' | translate }}</option>\r\n                  <option value=\"Male\">{{'Male' | translate }} </option>\r\n                  <option value=\"Female\">{{'Female' | translate }} </option>\r\n                </select>\r\n              </div>\r\n            </div><span *ngIf=\"form.inputerror.gender != null\" class=\"alertRedColor\" style=\" color: red;\"> {{'gender'|\r\n              translate}} </span>\r\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.gender}} </span> -->\r\n          </div>\r\n\r\n          <div>\r\n            <span class=\"pt-2\"><b>{{'Image' | translate }}</b>\r\n              <!-- <option [ngValue]=\"\" value=\"undefined\"></option> -->\r\n              <span *ngIf=\"!form.data.imageId\" class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div *ngIf=\"form.data.imageId\">\r\n                <img src=\"http://localhost:8084/User/profilePic/{{form.data.id}}\" height=\"55px\" width=\"80px\">\r\n              </div>\r\n              <div *ngIf=\"!form.data.imageId\">\r\n                <img src=\"../../assets/files/default.jpg\" height=\"55px\" width=\"80px\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-picture-o grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"file\" id=\"customFile\" name=\"imageId\" (change)=\"onFileSelect($event.target.files)\"\r\n                  accept=\"image/*\">\r\n\r\n                <span class=\"alertRedColor\"> {{form.inputerror.image}} </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div>\r\n            <span class=\"pt-2\"><b>{{'Status' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-bell grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" id=\"status\" name=\"status\" [(ngModel)]=\"form.data.status\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{' Select Status' | translate }}</option>\r\n                  <option value=\"Active\">{{'Active' | translate }} </option>\r\n                  <option value=\"Inactive\">{{'Inactive' | translate }} </option>\r\n                </select>\r\n              </div>\r\n            </div><span *ngIf=\"form.inputerror.status != null\" class=\"alertRedColor\" style=\" color: red;\"> {{'status'|\r\n              translate}} </span>\r\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.status}} </span> -->\r\n          </div>\r\n          <div class=\"row pt-2 pl-2 pb-3\">\r\n\r\n            <div class=\"col-md-3\"></div>\r\n\r\n\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"onUpload()\" class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate }}</button>\r\n            </div>\r\n\r\n            <div class=\"col-md-1\"></div>\r\n\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"onUpload()\" class=\"btn btn-success mr-2\">\r\n                {{'Update' | translate }}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <a class=\"btn btn-warning mr-1\" type=\"button\" [routerLink]=\"['/userlist']\"\r\n                  style=\"text-decoration: none; color: white;\">{{'List' | translate }}</a>\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var UserComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserComponent, _super);
    function UserComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.USER, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.getKey = false;
        _this.selected = null;
        _this.fileToUpload = null;
        _this.userForm = null;
        return _this;
    }
    UserComponent.prototype.submit = function () {
        var _self = this;
        console.log('in submit');
        console.log(this.form);
        console.log(this.form.data);
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {}; // Clear input errors here
            if (res.success) {
                _self.form.error = false; // Set error to false on success
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                if (_self.fileToUpload) {
                    _self.myFile();
                }
                console.log(_self.form.data.id);
                console.log("----------Rahul----------.");
                // Clear form data if needed
                // _self.form.data = {};
            }
            else {
                _self.form.error = true;
                if (res.result.inputerror) {
                    _self.form.inputerror = res.result.inputerror;
                }
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    UserComponent.prototype.submit1 = function () {
        var _self = this;
        console.log(this.form + "submit running start");
        console.log(this.form.data + "form data going to be submit");
        this.serviceLocator.httpService.post(this.api.search, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            _self.form.data.id = res.result.data;
            _self.myFile();
            if (res.success) {
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("--------------------.");
            }
            else {
                _self.form.error = true;
                _self.form.inputerror = res.result.inputerror;
                _self.form.message = res.result.message;
            }
            _self.form.data.id = res.result.data;
            console.log('FORM', _self.form);
        });
    };
    UserComponent.prototype.onFileSelect = function (files) {
        this.fileToUpload = files.item(0);
        console.log(this.fileToUpload);
    };
    UserComponent.prototype.onUpload = function (userform) {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    UserComponent.prototype.myFile = function () {
        var _this = this;
        console.log(this.form.data.id + 'after super.submit-----');
        this.onSubmitProfile(this.fileToUpload, this.userForm).subscribe(function (data) {
            console.log(_this.fileToUpload);
        }, function (error) {
            console.log(error);
        });
    };
    UserComponent.prototype.onSubmitProfile = function (fileToUpload, userform) {
        var formData = new FormData();
        var phone = null;
        formData.append('file', fileToUpload);
        console.log(this.form.data.id + 'this id number ======');
        return this.httpClient.post("http://localhost:8084/User/profilePic/" + this.form.data.id, formData);
    };
    UserComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.roleId);
        console.log(form.roleId);
        flag = flag && validator.isNotNullObject(form.firstName);
        console.log(form.firstName);
        flag = flag && validator.isNotNullObject(form.lastName);
        console.log(form.lastName);
        flag = flag && validator.isNotNullObject(form.loginId);
        console.log(form.loginId);
        flag = flag && validator.isNotNullObject(form.password);
        console.log(form.password);
        flag = flag && validator.isNotNullObject(form.phone);
        console.log(form.phone);
        flag = flag && validator.isNotNullObject(form.alternateMobile);
        console.log(form.alternateMobile);
        flag = flag && validator.isNotNullObject(form.dob);
        console.log(form.dob);
        flag = flag && validator.isNotNullObject(form.gender);
        console.log(form.gender + 'gender--');
        flag = flag && validator.isNotNullObject(form.status);
        console.log(form.status + 'status---');
        return flag;
    };
    UserComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        console.log(form.id + 'populate form in usercomponent');
        form.firstName = data.firstName;
        form.lastName = data.lastName;
        form.loginId = data.loginId;
        form.password = data.password;
        form.gender = data.gender;
        console.log(form.gender + 'gender--');
        form.alternateMobile = data.alternateMobile;
        form.phone = data.phone;
        console.log(form.phone);
        form.dob = data.dob;
        form.roleId = data.roleId;
        form.status = data.status;
        form.imageId = data.imageId;
        console.log(form.status + 'status---');
    };
    UserComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    UserComponent.prototype.test = function () {
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], UserComponent);
    return UserComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/utility/data-validator.ts":
/*!*******************************************!*\
  !*** ./src/app/utility/data-validator.ts ***!
  \*******************************************/
/*! exports provided: DataValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataValidator", function() { return DataValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DataValidator = /** @class */ (function () {
    function DataValidator() {
    }
    DataValidator.prototype.trim = function (valueToWhite) {
        return valueToWhite.replace(/\s/g, "");
    };
    /**
     * Check is string is not empty
     * @param val
     */
    DataValidator.prototype.isNotNull = function (val) {
        var flag = true;
        try {
            if (val) {
                val = this.trim(val);
                flag = val.length > 0;
            }
            else {
                flag = false;
            }
        }
        catch (error) {
            flag = false;
        }
        return flag;
    };
    /**
   * Is string is empty
   * @param val
   */
    DataValidator.prototype.isNull = function (val) {
        return !this.isNotNullObject(val);
    };
    /**
     * Is not null object
     */
    DataValidator.prototype.isNotNullObject = function (val) {
        var flag = true;
        try {
            if (val) {
                flag = true;
            }
            else {
                flag = false;
            }
        }
        catch (error) {
            flag = false;
        }
        return flag;
    };
    /**
     * Is null object
     */
    DataValidator.prototype.isNullObject = function (val) {
        return !this.isNotNullObject(val);
    };
    DataValidator.prototype.isTrue = function (val) {
        var flag = true;
        if (val) {
            flag = true;
        }
        else {
            flag = false;
        }
        return flag;
    };
    /**
     *
     * @param val Convets string into number
     */
    DataValidator.prototype.toInt = function (val) {
        var returnVal = 0;
        if (val) {
            try {
                returnVal = parseInt(val);
                if (isNaN(returnVal)) {
                    returnVal = 0;
                }
            }
            catch (error) {
                returnVal = 0;
            }
        }
        return returnVal;
    };
    DataValidator.prototype.toFloat = function (val) {
        var returnVal = 0;
        if (val) {
            try {
                returnVal = parseFloat(val);
                if (isNaN(returnVal)) {
                    returnVal = 0;
                }
            }
            catch (error) {
                returnVal = 0;
            }
        }
        return returnVal;
    };
    /**
     * Create clone pobject
     *
     * @param obj
     */
    DataValidator.prototype.getClone = function (obj) {
        return JSON.parse(JSON.stringify(obj));
    };
    DataValidator = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataValidator);
    return DataValidator;
}());



/***/ }),

/***/ "./src/app/vehicletracking/vehicletracking.component.css":
/*!***************************************************************!*\
  !*** ./src/app/vehicletracking/vehicletracking.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlaGljbGV0cmFja2luZy92ZWhpY2xldHJhY2tpbmcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/vehicletracking/vehicletracking.component.html":
/*!****************************************************************!*\
  !*** ./src/app/vehicletracking/vehicletracking.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n\r\n  .input-group-addon {\r\n    box-shadow: 9px 8px 7px #001a33;\r\n  }\r\n\r\n  .required-field {\r\n    color: red;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .alertRedColor {\r\n    color: red;\r\n  }\r\n\r\n  .card-body {\r\n    padding: 2rem;\r\n  }\r\n\r\n  .input-group-text i {\r\n    width: 1.5rem;\r\n  }\r\n\r\n  .btn-primary,\r\n  .btn-success,\r\n  .btn-warning {\r\n    width: 100%;\r\n  }\r\n\r\n  .form-control {\r\n    height: calc(2.25rem + 2px);\r\n  }\r\n\r\n  .form-group {\r\n    margin-bottom: 1.5rem;\r\n  }\r\n\r\n  .input-group-prepend .input-group-text {\r\n    background-color: #e9ecef;\r\n    border: 1px solid #ced4da;\r\n  }\r\n\r\n  .input-group-prepend .input-group-text i {\r\n    color: #495057;\r\n  }\r\n\r\n  .row {\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n  }\r\n\r\n  .textarea-height {\r\n    height: 100px;\r\n  }\r\n\r\n  .card {\r\n    margin: auto;\r\n    max-width: 500px;\r\n  }\r\n</style>\r\n\r\n<div class=\"container-fluid\"\r\n  style=\"padding: 2% 0; background: url('assets/files/wall.jpg') no-repeat center center; background-attachment: fixed; background-size: cover; width: 100%; height: auto;\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body input-group-addon grad\">\r\n          <form name=\"userForm\">\r\n            <h2 *ngIf=\"!form.data.id\" class=\"text-primary font-weight-bold text-center\">{{ 'Add Vehicle Tracking' |\r\n              translate }}\r\n            </h2>\r\n            <h2 *ngIf=\"form.data.id\" class=\"text-primary font-weight-bold text-center\">{{ 'Update Vehicle Tracking' |\r\n              translate }}\r\n            </h2>\r\n\r\n            <div *ngIf=\"!form.error && form.message\" class=\"alert alert-success alert-dismissible\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n              {{ form.message }}\r\n            </div>\r\n\r\n            <div *ngIf=\"form.error && form.message\" class=\"alert alert-danger alert-dismissible\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n              {{ form.message }}\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'VehicleId' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-flag grey-text\"></i></div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"vehicleIdId\" [(ngModel)]=\"form.data.vehicleIdId\"\r\n                  aria-label=\"ngSelected\">\r\n                  <option [ngValue]=\"undefined\">{{ 'Select vehicleId' | translate }}</option>\r\n                  <option *ngFor=\"let obj of form.preload.vehicleIdList\" [value]=\"obj.key\">{{ obj.key }}</option>\r\n                </select>\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.vehicleIdId\" class=\"alertRedColor\">{{form.inputerror.vehicleIdId}}</span>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Name' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></div>\r\n                </div>\r\n                <input type=\"text\" name=\"name\" [(ngModel)]=\"form.data.name\" class=\"form-control\"\r\n                  placeholder=\"{{ 'Enter name' | translate }}\" (keypress)=\"validateAlphabetInput($event)\">\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.name\" class=\"alertRedColor\">{{form.inputerror.name}}</span>\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Lat' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i></div>\r\n                </div>\r\n                <input type=\"number\" name=\"lat\" [(ngModel)]=\"form.data.lat\" class=\"form-control\"\r\n                  placeholder=\"{{ 'Enter lat' | translate }}\">\r\n\r\n\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.lat\" class=\"alertRedColor\">{{ form.inputerror.lat}}</span>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'longitude' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i></div>\r\n                </div>\r\n                <input type=\"number\" name=\"longitude\" [(ngModel)]=\"form.data.longitude\" class=\"form-control\"\r\n                  placeholder=\"{{ 'Enter longitude' | translate }}\">\r\n\r\n\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.lat\" class=\"alertRedColor\">{{ form.inputerror.lat}}</span>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label><b>{{ 'Date' | translate }}</b><span class=\"required-field\"></span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-calendar-alt grey-text\"></i></div>\r\n                </div>\r\n                <input type=\"date\" name=\"date\" [value]=\"form.data.date | date:'yyyy-MM-dd'\"\r\n                  (input)=\"form.data.date=parseDate($event.target.value)\" class=\"form-control\" required />\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.date\" class=\"alertRedColor\">{{ form.inputerror.date\r\n                }}</span>\r\n            </div>\r\n\r\n\r\n            <div class=\"row pt-2 pb-3 justify-content-center\">\r\n              <div class=\"col-md-4\">\r\n                <button *ngIf=\"!form.data.id\" (click)=\"onUpload()\" class=\"btn btn-success\">{{ 'Save' | translate\r\n                  }}</button>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <button *ngIf=\"form.data.id\" (click)=\"onUpload()\" class=\"btn btn-success\">{{ 'Update' | translate\r\n                  }}</button>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <a class=\"btn btn-warning\" type=\"button\" [routerLink]=\"['/vehicletrackinglist']\">{{ 'List' | translate\r\n                  }}</a>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/vehicletracking/vehicletracking.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/vehicletracking/vehicletracking.component.ts ***!
  \**************************************************************/
/*! exports provided: VehicletrackingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicletrackingComponent", function() { return VehicletrackingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var VehicletrackingComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](VehicletrackingComponent, _super);
    function VehicletrackingComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.VEHICLETRACKING, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.getKey = false;
        _this.selected = null;
        _this.userForm = null;
        return _this;
    }
    VehicletrackingComponent.prototype.submit = function () {
        var _self = this;
        console.log('in submit');
        console.log(this.form);
        console.log(this.form.data);
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {}; // Clear input errors here
            if (res.success) {
                _self.form.error = false; // Set error to false on success
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("----------Rahul----------.");
                // Clear form data if needed
                // _self.form.data = {};
            }
            else {
                _self.form.error = true;
                if (res.result.inputerror) {
                    _self.form.inputerror = res.result.inputerror;
                }
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    VehicletrackingComponent.prototype.submit1 = function () {
        var _self = this;
        console.log(this.form + "submit running start");
        console.log(this.form.data + "form data going to be submit");
        this.serviceLocator.httpService.post(this.api.search, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            _self.form.data.id = res.result.data;
            if (res.success) {
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("--------------------.");
            }
            else {
                _self.form.error = true;
                _self.form.inputerror = res.result.inputerror;
                _self.form.message = res.result.message;
            }
            _self.form.data.id = res.result.data;
            console.log('FORM', _self.form);
        });
    };
    VehicletrackingComponent.prototype.onUpload = function (userform) {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    VehicletrackingComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.vehicleIdId);
        console.log(form.vehicleIdId);
        flag = flag && validator.isNotNullObject(form.name);
        console.log(form.name);
        flag = flag && validator.isNotNullObject(form.lat);
        console.log(form.lat);
        flag = flag && validator.isNotNullObject(form.longitude);
        console.log(form.longitude);
        flag = flag && validator.isNotNullObject(form.date);
        console.log(form.date);
        return flag;
    };
    VehicletrackingComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        console.log(form.id + 'populate form in shoppingcomponent');
        form.name = data.name;
        form.lat = data.lat;
        form.longitude = data.longitude;
        form.date = data.date;
        form.vehicleIdId = data.vehicleIdId;
    };
    VehicletrackingComponent.prototype.validatePhone = function (event) {
        var input = event.key;
        // Check if the input is a number or backspace
        if ((isNaN(Number(input)) && input !== 'Backspace') || (input === ' ')) {
            event.preventDefault();
        }
        // Limit the input to 10 characters
        if (this.form.data.phone && this.form.data.phone.length >= 10 && input !== 'Backspace') {
            event.preventDefault();
        }
    };
    VehicletrackingComponent.prototype.validateAlphabetInput = function (event) {
        var charCode = event.which || event.keyCode;
        var charStr = String.fromCharCode(charCode);
        // Regular expression to test if the character is a letter
        var letterRegex = /^[a-zA-Z\s]+$/;
        // Test if the input matches the allowed characters
        if (!letterRegex.test(charStr)) {
            event.preventDefault();
        }
        // Optionally, check the entire value against the name format regex
        var inputElement = event.target;
        var inputValue = inputElement.value + charStr; // Add the current character to the input value
        // Regex for valid name format "FirstName LastName"
        var nameRegex = /^[A-Z][a-z]+ [A-Z][a-z]+$/;
        // Check if the current value matches the valid name format
        if (!nameRegex.test(inputValue)) {
            // Handle invalid input (e.g., disable submit button, show error message)
            // Example:
            inputElement.classList.add('invalid'); // Apply CSS class for invalid input
        }
        else {
            inputElement.classList.remove('invalid'); // Remove invalid CSS class if format is valid
        }
    };
    VehicletrackingComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    VehicletrackingComponent.prototype.test = function () {
    };
    VehicletrackingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vehicletracking',
            template: __webpack_require__(/*! ./vehicletracking.component.html */ "./src/app/vehicletracking/vehicletracking.component.html"),
            styles: [__webpack_require__(/*! ./vehicletracking.component.css */ "./src/app/vehicletracking/vehicletracking.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], VehicletrackingComponent);
    return VehicletrackingComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/vehicletracking/vehicletrackinglist.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/vehicletracking/vehicletrackinglist.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlaGljbGV0cmFja2luZy92ZWhpY2xldHJhY2tpbmdsaXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/vehicletracking/vehicletrackinglist.component.html":
/*!********************************************************************!*\
  !*** ./src/app/vehicletracking/vehicletrackinglist.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  #nnn {\r\n    background: none;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .panel-heading {\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .search-inputs {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .search-inputs .form-control,\r\n  .search-inputs .btn {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .content-wrapper {\r\n    background: url(assets/files/wall.jpg) no-repeat center center;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    width: auto;\r\n    height: 105vh;\r\n    padding: 20px;\r\n  }\r\n\r\n  .table-responsive {\r\n    margin-top: 20px;\r\n  }\r\n</style>\r\n\r\n<div class=\"content-wrapper\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\">\r\n        <h1 class=\"text-primary font-weight-bold\">{{ 'Vehicle Tracking List' | translate }}</h1>\r\n      </div>\r\n\r\n      <div class=\"row search-inputs justify-content-center\">\r\n        <div class=\"col-md-3\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.name\"\r\n            placeholder=\"{{ 'Search Name' | translate }}\" (input)=\"validateInput($event, 'name')\">\r\n          <div *ngIf=\"!isValidNameInput\" class=\"text-danger\">{{ nameErrorMessage }}</div>\r\n        </div>\r\n        <!--  <div class=\"col-md-3\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.mobile\"\r\n            placeholder=\"{{ 'Search mobile' | translate }}\" (input)=\"validateInput($event, 'mobile')\">\r\n          <div *ngIf=\"!isValidMobileInput\" class=\"text-danger\">{{ mobileErrorMessage }}</div>\r\n        </div> -->\r\n\r\n        <div class=\"col-md-3\">\r\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.searchParams.date\"\r\n            (ngModelChange)=\"formatDate($event)\" placeholder=\"{{ 'Search date' | translate }}\">\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"form.searchParams.lat\"\r\n            placeholder=\"{{ 'Search lat' | translate }}\">\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"form.searchParams.longitude\"\r\n            placeholder=\"{{ 'Search longitude' | translate }}\">\r\n        </div>\r\n\r\n\r\n        <div class=\"col-md-3\">\r\n          <select class=\"form-control\" name=\"vehicleIdId\" [(ngModel)]=\"form.searchParams.vehicleIdId\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{ 'Select vehicleId' | translate }}</option>\r\n            <option *ngFor=\"let obj of form.preload.vehicleIdList\" [value]=\"obj.key\">{{ obj.key }}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row mt-2 justify-content-center\">\r\n        <div class=\"col-md-2\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary btn-block\">{{ 'Search' | translate }}</button>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <button (click)=\"forward('/vehicletracking')\" type=\"button\" class=\"btn btn-success btn-block\">{{ 'Add vehicle tracking' |\r\n            translate }}</button>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger btn-block\">{{ 'Delete' | translate }}</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"form.error || form.message\" class=\"row mt-2 justify-content-center\">\r\n        <div class=\"col-md-6\">\r\n          <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{ form.message }}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{ form.message }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-responsive mt-3\">\r\n        <table class=\"table table-bordered table-hover font-weight-bold text-dark\">\r\n          <thead class=\"thead-dark text-uppercase\">\r\n            <tr align=\"center\">\r\n              <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\"\r\n                  (change)=\"checkUncheckAll($event)\" /></th>\r\n              <th>{{ 'S.No' }}</th>\r\n              <th>{{ 'name' }}</th>\r\n              <th>{{ 'lat' }}</th>\r\n              <th>{{ 'longitude' }}</th>\r\n              <th>{{ 'date' }}</th>\r\n              <th>{{ 'vehicleId' }}</th>\r\n              <th>{{ 'Edit' }}</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n              <td><input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" [id]=\"m.id\" /></td>\r\n              <td>{{ (form.pageNo * 5) + i + 1 }}</td>\r\n              <td>{{ m.name }}</td>\r\n              <td>{{ m.lat }}</td>\r\n              <td>{{ m.longitude }}</td>\r\n              <td>{{ convertToLocalDate(m.date) }}</td>\r\n              <td>{{ m.vehicleIdId }}</td>\r\n              <td>\r\n                <button class=\"fa fa-edit text-primary\" id=\"nnn\" (click)=\"forward('/vehicletracking/' + m.id)\"></button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <div class=\"d-flex justify-content-between mt-3\">\r\n        <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{ 'Previous' | translate\r\n          }}</button>\r\n        <div *ngIf=\"form.list.length == 0\">\r\n          <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/vehicletrackinglist']\" (click)=\"exit()\">{{ 'Back' |\r\n            translate }}</a>\r\n        </div>\r\n        <button (click)=\"next()\" [disabled]=\"nextList == 0\" class=\"btn btn-info\">{{ 'Next' | translate }}</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/vehicletracking/vehicletrackinglist.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/vehicletracking/vehicletrackinglist.component.ts ***!
  \******************************************************************/
/*! exports provided: VehicletrackinglistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicletrackinglistComponent", function() { return VehicletrackinglistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var VehicletrackinglistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](VehicletrackinglistComponent, _super);
    function VehicletrackinglistComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.VEHICLETRACKING, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null },
            inputerror: {},
            searchParams: {
                name: '',
                lat: '',
                date: '',
                vehicleIdId: '',
                longitude: ''
            },
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        _this.isValidMobileInput = true;
        _this.isValidNameInput = true;
        _this.nameErrorMessage = '';
        _this.mobileErrorMessage = '';
        return _this;
    }
    VehicletrackinglistComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    // Format date function
    VehicletrackinglistComponent.prototype.formatDate = function (event) {
        var selectedDate = new Date(event);
        var formattedDate = selectedDate.toISOString().split('T')[0];
        this.form.searchParams.date = formattedDate;
    };
    // Convert date to local format for display
    VehicletrackinglistComponent.prototype.convertToLocalDate = function (dateString) {
        var date = new Date(dateString);
        // Format date to 'MM/DD/YYYY'
        var options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return date.toLocaleDateString(undefined, options);
    };
    // Validate input for name and mobile fields
    VehicletrackinglistComponent.prototype.validateInput = function (event, field) {
        var value = event.target.value;
        if (field === 'mobile') {
            this.isValidMobileInput = /^[0-9]*$/.test(value); // Check if the input contains only numbers
            if (!this.isValidMobileInput) {
                this.mobileErrorMessage = 'Please type numbers only';
            }
            else {
                this.mobileErrorMessage = '';
            }
        }
        else if (field === 'name') {
            this.isValidNameInput = /^[A-Za-z\s]*$/.test(value); // Check if the input contains only letters and spaces
            if (!this.isValidNameInput) {
                this.nameErrorMessage = 'Please type alphabets only';
            }
            else {
                this.nameErrorMessage = '';
            }
        }
    };
    // Submit method
    VehicletrackinglistComponent.prototype.submit = function () {
        // Reset page number before searching
        this.form.pageNo = 0;
        // Call the search method after formatting the date
        this.search();
    };
    // Search method
    VehicletrackinglistComponent.prototype.search = function () {
        // Clear previous search message
        this.form.searchMessage = null;
        // Perform the search operation with the search parameters
        _super.prototype.search.call(this);
    };
    VehicletrackinglistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vehicletrackinglist',
            template: __webpack_require__(/*! ./vehicletrackinglist.component.html */ "./src/app/vehicletracking/vehicletrackinglist.component.html"),
            styles: [__webpack_require__(/*! ./vehicletrackinglist.component.css */ "./src/app/vehicletracking/vehicletrackinglist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], VehicletrackinglistComponent);
    return VehicletrackinglistComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\rkumb\OneDrive\Desktop\Yash pro10\PROJECT_10_FCT\ORSProject10-UI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map