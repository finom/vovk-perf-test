import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("koos")
export default class KooController {
  @operation({
    summary: "Get Koos",
  })
  @get()
  static getKoos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Koo",
  })
  @post("{id}")
  static createKoo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
