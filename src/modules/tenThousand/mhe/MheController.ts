import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mhes")
export default class MheController {
  @operation({
    summary: "Get Mhes",
  })
  @get()
  static getMhes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mhe",
  })
  @post("{id}")
  static createMhe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
