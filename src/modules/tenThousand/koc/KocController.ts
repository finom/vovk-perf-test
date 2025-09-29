import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kocs")
export default class KocController {
  @operation({
    summary: "Get Kocs",
  })
  @get()
  static getKocs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Koc",
  })
  @post("{id}")
  static createKoc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
