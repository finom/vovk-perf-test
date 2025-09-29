import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gils")
export default class GilController {
  @operation({
    summary: "Get Gils",
  })
  @get()
  static getGils = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gil",
  })
  @post("{id}")
  static createGil = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
