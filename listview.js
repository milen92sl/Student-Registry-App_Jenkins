listView('Student_Registry_Exercices-DSL') {
    description('Jobs for Student Registry App')
    
    job('Student_Registry_App_CI-DSL'){
        steps {
            batch('npm install')
        }
    }
}