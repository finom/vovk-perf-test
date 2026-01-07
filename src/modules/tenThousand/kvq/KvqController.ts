import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvq")
export default class KvqController {
  @operation({
    summary: "Get Kvq",
  })
  @get()
  static getKvq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kvq",
  })
  @post("{id}")
  static createKvq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
