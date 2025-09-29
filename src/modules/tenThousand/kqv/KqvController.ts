import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kqvs")
export default class KqvController {
  @operation({
    summary: "Get Kqvs",
  })
  @get()
  static getKqvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kqv",
  })
  @post("{id}")
  static createKqv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
