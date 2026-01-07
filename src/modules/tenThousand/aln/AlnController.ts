import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aln")
export default class AlnController {
  @operation({
    summary: "Get Aln",
  })
  @get()
  static getAln = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aln",
  })
  @post("{id}")
  static createAln = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
