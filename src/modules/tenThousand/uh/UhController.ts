import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("uhs")
export default class UhController {
  @operation({
    summary: "Get Uhs",
  })
  @get()
  static getUhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Uh",
  })
  @post("{id}")
  static createUh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
