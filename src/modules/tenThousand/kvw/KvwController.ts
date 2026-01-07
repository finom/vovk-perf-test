import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvw")
export default class KvwController {
  @operation({
    summary: "Get Kvw",
  })
  @get()
  static getKvw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kvw",
  })
  @post("{id}")
  static createKvw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
