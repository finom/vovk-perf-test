import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzw")
export default class HzwController {
  @operation({
    summary: "Get Hzw",
  })
  @get()
  static getHzw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hzw",
  })
  @post("{id}")
  static createHzw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
