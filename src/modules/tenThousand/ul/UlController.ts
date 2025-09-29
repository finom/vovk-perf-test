import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("uls")
export default class UlController {
  @operation({
    summary: "Get Uls",
  })
  @get()
  static getUls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ul",
  })
  @post("{id}")
  static createUl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
