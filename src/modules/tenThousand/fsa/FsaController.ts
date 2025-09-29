import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fsas")
export default class FsaController {
  @operation({
    summary: "Get Fsas",
  })
  @get()
  static getFsas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fsa",
  })
  @post("{id}")
  static createFsa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
