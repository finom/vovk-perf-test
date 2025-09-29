import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("uus")
export default class UuController {
  @operation({
    summary: "Get Uus",
  })
  @get()
  static getUus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Uu",
  })
  @post("{id}")
  static createUu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
