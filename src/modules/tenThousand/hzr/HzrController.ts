import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzr")
export default class HzrController {
  @operation({
    summary: "Get Hzr",
  })
  @get()
  static getHzr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hzr",
  })
  @post("{id}")
  static createHzr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
