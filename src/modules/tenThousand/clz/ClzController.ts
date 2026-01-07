import { procedure, prefix, get, post, operation } from "vovk";

@prefix("clz")
export default class ClzController {
  @operation({
    summary: "Get Clz",
  })
  @get()
  static getClz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Clz",
  })
  @post("{id}")
  static createClz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
