import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bhhs")
export default class BhhController {
  @operation({
    summary: "Get Bhhs",
  })
  @get()
  static getBhhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bhh",
  })
  @post("{id}")
  static createBhh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
