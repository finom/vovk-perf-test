import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("giks")
export default class GikController {
  @operation({
    summary: "Get Giks",
  })
  @get()
  static getGiks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gik",
  })
  @post("{id}")
  static createGik = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
