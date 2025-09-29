import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kqhs")
export default class KqhController {
  @operation({
    summary: "Get Kqhs",
  })
  @get()
  static getKqhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kqh",
  })
  @post("{id}")
  static createKqh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
