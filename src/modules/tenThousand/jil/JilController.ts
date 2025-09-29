import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jils")
export default class JilController {
  @operation({
    summary: "Get Jils",
  })
  @get()
  static getJils = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jil",
  })
  @post("{id}")
  static createJil = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
