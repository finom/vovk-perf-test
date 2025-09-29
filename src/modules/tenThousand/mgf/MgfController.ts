import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mgfs")
export default class MgfController {
  @operation({
    summary: "Get Mgfs",
  })
  @get()
  static getMgfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mgf",
  })
  @post("{id}")
  static createMgf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
