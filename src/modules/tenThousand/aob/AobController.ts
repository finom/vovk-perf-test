import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aobs")
export default class AobController {
  @operation({
    summary: "Get Aobs",
  })
  @get()
  static getAobs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aob",
  })
  @post("{id}")
  static createAob = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
