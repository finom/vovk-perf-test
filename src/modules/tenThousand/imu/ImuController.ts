import { procedure, prefix, get, post, operation } from "vovk";

@prefix("imu")
export default class ImuController {
  @operation({
    summary: "Get Imu",
  })
  @get()
  static getImu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Imu",
  })
  @post("{id}")
  static createImu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
