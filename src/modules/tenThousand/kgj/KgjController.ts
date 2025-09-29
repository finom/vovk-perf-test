import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kgjs")
export default class KgjController {
  @operation({
    summary: "Get Kgjs",
  })
  @get()
  static getKgjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kgj",
  })
  @post("{id}")
  static createKgj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
