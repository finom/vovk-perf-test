import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("tis")
export default class TiController {
  @operation({
    summary: "Get Tis",
  })
  @get()
  static getTis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ti",
  })
  @post("{id}")
  static createTi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
