import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kv")
export default class KvController {
  @operation({
    summary: "Get Kv",
  })
  @get()
  static getKv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kv",
  })
  @post("{id}")
  static createKv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
