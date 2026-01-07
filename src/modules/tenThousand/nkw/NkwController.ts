import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nkw")
export default class NkwController {
  @operation({
    summary: "Get Nkw",
  })
  @get()
  static getNkw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nkw",
  })
  @post("{id}")
  static createNkw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
