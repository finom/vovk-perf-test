import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jcos")
export default class JcoController {
  @operation({
    summary: "Get Jcos",
  })
  @get()
  static getJcos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jco",
  })
  @post("{id}")
  static createJco = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
