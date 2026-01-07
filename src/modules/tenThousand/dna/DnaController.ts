import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dna")
export default class DnaController {
  @operation({
    summary: "Get Dna",
  })
  @get()
  static getDna = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dna",
  })
  @post("{id}")
  static createDna = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
