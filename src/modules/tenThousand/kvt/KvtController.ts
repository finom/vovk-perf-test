import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvt")
export default class KvtController {
  @operation({
    summary: "Get Kvt",
  })
  @get()
  static getKvt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kvt",
  })
  @post("{id}")
  static createKvt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
