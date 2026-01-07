import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nda")
export default class NdaController {
  @operation({
    summary: "Get Nda",
  })
  @get()
  static getNda = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nda",
  })
  @post("{id}")
  static createNda = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
