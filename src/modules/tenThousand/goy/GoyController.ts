import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("goys")
export default class GoyController {
  @operation({
    summary: "Get Goys",
  })
  @get()
  static getGoys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Goy",
  })
  @post("{id}")
  static createGoy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
