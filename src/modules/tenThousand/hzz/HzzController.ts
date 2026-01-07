import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzz")
export default class HzzController {
  @operation({
    summary: "Get Hzz",
  })
  @get()
  static getHzz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hzz",
  })
  @post("{id}")
  static createHzz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
