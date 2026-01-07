import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nkm")
export default class NkmController {
  @operation({
    summary: "Get Nkm",
  })
  @get()
  static getNkm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nkm",
  })
  @post("{id}")
  static createNkm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
