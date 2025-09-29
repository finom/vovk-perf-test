import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mdbs")
export default class MdbController {
  @operation({
    summary: "Get Mdbs",
  })
  @get()
  static getMdbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mdb",
  })
  @post("{id}")
  static createMdb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
