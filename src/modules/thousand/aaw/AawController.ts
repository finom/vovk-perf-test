import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aaws")
export default class AawController {
  @operation({
    summary: "Get Aaws",
  })
  @get()
  static getAaws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aaw",
  })
  @post("{id}")
  static createAaw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
