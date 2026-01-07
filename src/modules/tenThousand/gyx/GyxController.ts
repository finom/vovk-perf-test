import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gyx")
export default class GyxController {
  @operation({
    summary: "Get Gyx",
  })
  @get()
  static getGyx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gyx",
  })
  @post("{id}")
  static createGyx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
