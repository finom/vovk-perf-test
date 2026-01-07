import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lsa")
export default class LsaController {
  @operation({
    summary: "Get Lsa",
  })
  @get()
  static getLsa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lsa",
  })
  @post("{id}")
  static createLsa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
