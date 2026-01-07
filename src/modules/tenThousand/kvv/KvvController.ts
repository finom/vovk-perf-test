import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvv")
export default class KvvController {
  @operation({
    summary: "Get Kvv",
  })
  @get()
  static getKvv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kvv",
  })
  @post("{id}")
  static createKvv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
