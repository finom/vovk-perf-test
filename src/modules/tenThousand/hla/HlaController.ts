import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hlas")
export default class HlaController {
  @operation({
    summary: "Get Hlas",
  })
  @get()
  static getHlas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hla",
  })
  @post("{id}")
  static createHla = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
