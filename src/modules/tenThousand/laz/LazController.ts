import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lazs")
export default class LazController {
  @operation({
    summary: "Get Lazs",
  })
  @get()
  static getLazs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Laz",
  })
  @post("{id}")
  static createLaz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
