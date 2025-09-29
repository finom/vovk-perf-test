import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kkbs")
export default class KkbController {
  @operation({
    summary: "Get Kkbs",
  })
  @get()
  static getKkbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kkb",
  })
  @post("{id}")
  static createKkb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
