import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("clgs")
export default class ClgController {
  @operation({
    summary: "Get Clgs",
  })
  @get()
  static getClgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Clg",
  })
  @post("{id}")
  static createClg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
