import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvx")
export default class KvxController {
  @operation({
    summary: "Get Kvx",
  })
  @get()
  static getKvx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kvx",
  })
  @post("{id}")
  static createKvx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
