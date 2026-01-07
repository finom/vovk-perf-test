import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpu")
export default class MpuController {
  @operation({
    summary: "Get Mpu",
  })
  @get()
  static getMpu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mpu",
  })
  @post("{id}")
  static createMpu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
