import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ums")
export default class UmController {
  @operation({
    summary: "Get Ums",
  })
  @get()
  static getUms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Um",
  })
  @post("{id}")
  static createUm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
