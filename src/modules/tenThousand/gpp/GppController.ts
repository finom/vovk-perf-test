import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gpps")
export default class GppController {
  @operation({
    summary: "Get Gpps",
  })
  @get()
  static getGpps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gpp",
  })
  @post("{id}")
  static createGpp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
