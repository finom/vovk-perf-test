import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aln")
export default class AlnController {
  @operation({
    summary: "Get Aln",
  })
  @get()
  static getAln = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aln",
  })
  @post("{id}")
  static createAln = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
