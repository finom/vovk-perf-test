import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gams")
export default class GamController {
  @operation({
    summary: "Get Gams",
  })
  @get()
  static getGams = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gam",
  })
  @post("{id}")
  static createGam = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
