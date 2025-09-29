import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aehs")
export default class AehController {
  @operation({
    summary: "Get Aehs",
  })
  @get()
  static getAehs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aeh",
  })
  @post("{id}")
  static createAeh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
