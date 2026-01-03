import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mols")
export default class MolController {
  @operation({
    summary: "Get Mols",
  })
  @get()
  static getMols = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mol",
  })
  @post("{id}")
  static createMol = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
