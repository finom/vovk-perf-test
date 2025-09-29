import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aiks")
export default class AikController {
  @operation({
    summary: "Get Aiks",
  })
  @get()
  static getAiks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aik",
  })
  @post("{id}")
  static createAik = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
