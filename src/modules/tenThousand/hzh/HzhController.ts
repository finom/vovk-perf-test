import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzh")
export default class HzhController {
  @operation({
    summary: "Get Hzh",
  })
  @get()
  static getHzh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hzh",
  })
  @post("{id}")
  static createHzh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
