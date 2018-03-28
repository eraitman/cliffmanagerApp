import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

const SchedulesScreen = props => {
  const { schedules } = props;
  console.log(schedules);
  return (
    <View>
      {schedules.map(s => (
        <Text key={s.id}>
          {" "}
          {s.planed_schedules.klass.group +
            " : " +
            s.planed_schedules.lesson_ymd}
        </Text>
      ))}
    </View>
  );
};

// SchedulesScreen.propTypes = {
//   schedules: PropTypes.array(
//     PropTypes.shape({
//       id: PropTypes.number,
//       student: PropTypes.string,
//       seq: PropTypes.number,
//       planed_schedules: PropTypes.shape({
//         schedule_id: PropTypes.number,
//         klass: PropTypes.shape({
//           klass_id: PropTypes.number,
//           year: PropTypes.string,
//           quarter: PropTypes.string,
//           term: PropTypes.string,
//           group: PropTypes.string,
//           start_ymd: PropTypes.string,
//           end_ymd: PropTypes.string
//         }),
//         lesson_no: PropTypes.number,
//         lesson_start_dt: PropTypes.string,
//         lesson_ymd: PropTypes.string,
//         lesson_end_dt: PropTypes.string,
//         planed_Curriculum: PropTypes.string
//       })
//     })
//   )
// };
export default SchedulesScreen;
