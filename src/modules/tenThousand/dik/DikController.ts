import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("diks")
export default class DikController {
  @operation({
    summary: "Get Diks",
  })
  @get()
  static getDiks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dik",
  })
  @post("{id}")
  static createDik = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
