import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mols")
export default class MolController {
  @operation({
    summary: "Get Mols",
  })
  @get()
  static getMols = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mol",
  })
  @post("{id}")
  static createMol = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
