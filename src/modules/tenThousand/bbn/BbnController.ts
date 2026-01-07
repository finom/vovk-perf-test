import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbn")
export default class BbnController {
  @operation({
    summary: "Get Bbn",
  })
  @get()
  static getBbn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bbn",
  })
  @post("{id}")
  static createBbn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
