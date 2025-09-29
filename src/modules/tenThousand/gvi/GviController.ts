import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gvis")
export default class GviController {
  @operation({
    summary: "Get Gvis",
  })
  @get()
  static getGvis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gvi",
  })
  @post("{id}")
  static createGvi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
