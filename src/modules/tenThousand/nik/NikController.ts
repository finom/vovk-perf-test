import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("niks")
export default class NikController {
  @operation({
    summary: "Get Niks",
  })
  @get()
  static getNiks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nik",
  })
  @post("{id}")
  static createNik = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
