import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dna")
export default class DnaController {
  @operation({
    summary: "Get Dna",
  })
  @get()
  static getDna = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dna",
  })
  @post("{id}")
  static createDna = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
