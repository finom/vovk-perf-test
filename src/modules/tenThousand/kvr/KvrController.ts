import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvr")
export default class KvrController {
  @operation({
    summary: "Get Kvr",
  })
  @get()
  static getKvr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kvr",
  })
  @post("{id}")
  static createKvr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
