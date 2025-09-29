import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gwps")
export default class GwpController {
  @operation({
    summary: "Get Gwps",
  })
  @get()
  static getGwps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gwp",
  })
  @post("{id}")
  static createGwp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
