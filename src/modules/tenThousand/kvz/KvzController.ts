import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvz")
export default class KvzController {
  @operation({
    summary: "Get Kvz",
  })
  @get()
  static getKvz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kvz",
  })
  @post("{id}")
  static createKvz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
