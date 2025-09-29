import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nehs")
export default class NehController {
  @operation({
    summary: "Get Nehs",
  })
  @get()
  static getNehs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Neh",
  })
  @post("{id}")
  static createNeh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
