import { procedure, prefix, get, post, operation } from "vovk";

@prefix("msa")
export default class MsaController {
  @operation({
    summary: "Get Msa",
  })
  @get()
  static getMsa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Msa",
  })
  @post("{id}")
  static createMsa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
