import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbb")
export default class NbbController {
  @operation({
    summary: "Get Nbb",
  })
  @get()
  static getNbb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nbb",
  })
  @post("{id}")
  static createNbb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
