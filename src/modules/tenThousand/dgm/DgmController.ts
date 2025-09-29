import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dgms")
export default class DgmController {
  @operation({
    summary: "Get Dgms",
  })
  @get()
  static getDgms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dgm",
  })
  @post("{id}")
  static createDgm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
