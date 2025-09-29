import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dmms")
export default class DmmController {
  @operation({
    summary: "Get Dmms",
  })
  @get()
  static getDmms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dmm",
  })
  @post("{id}")
  static createDmm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
