import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kixes")
export default class KixController {
  @operation({
    summary: "Get Kixes",
  })
  @get()
  static getKixes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kix",
  })
  @post("{id}")
  static createKix = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
