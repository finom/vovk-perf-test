import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ails")
export default class AilController {
  @operation({
    summary: "Get Ails",
  })
  @get()
  static getAils = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ail",
  })
  @post("{id}")
  static createAil = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
