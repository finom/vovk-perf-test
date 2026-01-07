import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzl")
export default class HzlController {
  @operation({
    summary: "Get Hzl",
  })
  @get()
  static getHzl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hzl",
  })
  @post("{id}")
  static createHzl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
