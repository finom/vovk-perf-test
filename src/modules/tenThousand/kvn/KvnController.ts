import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvn")
export default class KvnController {
  @operation({
    summary: "Get Kvn",
  })
  @get()
  static getKvn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kvn",
  })
  @post("{id}")
  static createKvn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
