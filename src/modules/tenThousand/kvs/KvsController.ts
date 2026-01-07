import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvs")
export default class KvsController {
  @operation({
    summary: "Get Kvs",
  })
  @get()
  static getKvs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kvs",
  })
  @post("{id}")
  static createKvs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
