import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jhws")
export default class JhwController {
  @operation({
    summary: "Get Jhws",
  })
  @get()
  static getJhws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jhw",
  })
  @post("{id}")
  static createJhw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
