import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bhes")
export default class BheController {
  @operation({
    summary: "Get Bhes",
  })
  @get()
  static getBhes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bhe",
  })
  @post("{id}")
  static createBhe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
