import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bazs")
export default class BazController {
  @operation({
    summary: "Get Bazs",
  })
  @get()
  static getBazs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Baz",
  })
  @post("{id}")
  static createBaz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
