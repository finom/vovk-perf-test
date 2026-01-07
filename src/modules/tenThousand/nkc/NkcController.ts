import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nkc")
export default class NkcController {
  @operation({
    summary: "Get Nkc",
  })
  @get()
  static getNkc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nkc",
  })
  @post("{id}")
  static createNkc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
