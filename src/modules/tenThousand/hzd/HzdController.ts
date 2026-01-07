import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzd")
export default class HzdController {
  @operation({
    summary: "Get Hzd",
  })
  @get()
  static getHzd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hzd",
  })
  @post("{id}")
  static createHzd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
