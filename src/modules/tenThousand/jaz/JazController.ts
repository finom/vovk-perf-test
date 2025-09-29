import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jazs")
export default class JazController {
  @operation({
    summary: "Get Jazs",
  })
  @get()
  static getJazs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jaz",
  })
  @post("{id}")
  static createJaz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
