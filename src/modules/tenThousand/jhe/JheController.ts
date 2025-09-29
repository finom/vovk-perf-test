import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jhes")
export default class JheController {
  @operation({
    summary: "Get Jhes",
  })
  @get()
  static getJhes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jhe",
  })
  @post("{id}")
  static createJhe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
