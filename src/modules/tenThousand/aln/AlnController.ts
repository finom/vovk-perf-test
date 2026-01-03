import { procedure, prefix, get, post, operation } from "vovk";

@prefix("alns")
export default class AlnController {
  @operation({
    summary: "Get Alns",
  })
  @get()
  static getAlns = procedure({
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
