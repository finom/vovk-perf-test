import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvj")
export default class KvjController {
  @operation({
    summary: "Get Kvj",
  })
  @get()
  static getKvj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kvj",
  })
  @post("{id}")
  static createKvj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
