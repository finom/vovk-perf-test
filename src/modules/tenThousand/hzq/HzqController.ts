import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzq")
export default class HzqController {
  @operation({
    summary: "Get Hzq",
  })
  @get()
  static getHzq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hzq",
  })
  @post("{id}")
  static createHzq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
