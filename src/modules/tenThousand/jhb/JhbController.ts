import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jhbs")
export default class JhbController {
  @operation({
    summary: "Get Jhbs",
  })
  @get()
  static getJhbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jhb",
  })
  @post("{id}")
  static createJhb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
