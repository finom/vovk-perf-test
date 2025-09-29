import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("agps")
export default class AgpController {
  @operation({
    summary: "Get Agps",
  })
  @get()
  static getAgps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Agp",
  })
  @post("{id}")
  static createAgp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
