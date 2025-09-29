import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iazs")
export default class IazController {
  @operation({
    summary: "Get Iazs",
  })
  @get()
  static getIazs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iaz",
  })
  @post("{id}")
  static createIaz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
