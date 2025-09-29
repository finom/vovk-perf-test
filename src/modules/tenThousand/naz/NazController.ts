import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nazs")
export default class NazController {
  @operation({
    summary: "Get Nazs",
  })
  @get()
  static getNazs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Naz",
  })
  @post("{id}")
  static createNaz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
