import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cehs")
export default class CehController {
  @operation({
    summary: "Get Cehs",
  })
  @get()
  static getCehs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ceh",
  })
  @post("{id}")
  static createCeh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
