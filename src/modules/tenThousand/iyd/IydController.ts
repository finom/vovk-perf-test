import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iyds")
export default class IydController {
  @operation({
    summary: "Get Iyds",
  })
  @get()
  static getIyds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iyd",
  })
  @post("{id}")
  static createIyd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
