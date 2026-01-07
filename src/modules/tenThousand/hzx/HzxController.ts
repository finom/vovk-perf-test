import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzx")
export default class HzxController {
  @operation({
    summary: "Get Hzx",
  })
  @get()
  static getHzx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hzx",
  })
  @post("{id}")
  static createHzx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
