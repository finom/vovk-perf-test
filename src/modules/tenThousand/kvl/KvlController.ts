import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvl")
export default class KvlController {
  @operation({
    summary: "Get Kvl",
  })
  @get()
  static getKvl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kvl",
  })
  @post("{id}")
  static createKvl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
