import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ats")
export default class AtsController {
  @operation({
    summary: "Get Ats",
  })
  @get()
  static getAts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ats",
  })
  @post("{id}")
  static createAts = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
