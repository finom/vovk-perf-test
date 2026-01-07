import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvp")
export default class KvpController {
  @operation({
    summary: "Get Kvp",
  })
  @get()
  static getKvp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kvp",
  })
  @post("{id}")
  static createKvp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
