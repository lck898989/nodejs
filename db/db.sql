DROP TABLE IF EXISTS `User`;
CREATE TABLE `User` (
    `id` int(16) NOT NULL AUTO_INCREMENT COMMENT '用户唯一id',
    `nickname` varchar(255) NOT NULL DEFAULT '' COMMENT '用户昵称',
    `score` varchar(255) DEFAULT '0' COMMENT '用户分数',
    `rank` varchar(255) DEFAULT '0' COMMENT '用户排名',
    `gender` tinyint(2) DEFAULT '0' COMMENT '性别，0：女 1： 男',
    `avatar` varchar(255) DEFAULT NULL COMMENT '头像地址',
    `create_time` datetime DEFAULT NULL COMMENT '创建时间',
    `update_time` datetime DEFAULT NULL COMMENT '更新时间',
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COMMENT='用户表';