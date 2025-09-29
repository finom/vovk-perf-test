import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gxis")
export default class GxiController {
  @operation({
    summary: "Get Gxis",
  })
  @get()
  static getGxis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gxi",
  })
  @post("{id}")
  static createGxi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
