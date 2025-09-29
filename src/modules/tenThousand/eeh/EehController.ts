import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eehs")
export default class EehController {
  @operation({
    summary: "Get Eehs",
  })
  @get()
  static getEehs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eeh",
  })
  @post("{id}")
  static createEeh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
