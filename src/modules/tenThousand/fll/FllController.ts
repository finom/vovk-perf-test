import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("flls")
export default class FllController {
  @operation({
    summary: "Get Flls",
  })
  @get()
  static getFlls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fll",
  })
  @post("{id}")
  static createFll = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
