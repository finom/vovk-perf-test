import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eums")
export default class EumController {
  @operation({
    summary: "Get Eums",
  })
  @get()
  static getEums = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eum",
  })
  @post("{id}")
  static createEum = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
