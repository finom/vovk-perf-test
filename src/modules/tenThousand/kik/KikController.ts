import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kiks")
export default class KikController {
  @operation({
    summary: "Get Kiks",
  })
  @get()
  static getKiks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kik",
  })
  @post("{id}")
  static createKik = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
