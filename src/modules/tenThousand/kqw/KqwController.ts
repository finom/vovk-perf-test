import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kqws")
export default class KqwController {
  @operation({
    summary: "Get Kqws",
  })
  @get()
  static getKqws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kqw",
  })
  @post("{id}")
  static createKqw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
