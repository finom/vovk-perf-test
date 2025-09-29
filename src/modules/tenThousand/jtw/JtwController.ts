import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jtws")
export default class JtwController {
  @operation({
    summary: "Get Jtws",
  })
  @get()
  static getJtws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jtw",
  })
  @post("{id}")
  static createJtw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
