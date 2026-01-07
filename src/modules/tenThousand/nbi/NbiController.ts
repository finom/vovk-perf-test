import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbi")
export default class NbiController {
  @operation({
    summary: "Get Nbi",
  })
  @get()
  static getNbi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nbi",
  })
  @post("{id}")
  static createNbi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
