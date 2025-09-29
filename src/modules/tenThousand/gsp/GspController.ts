import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gsps")
export default class GspController {
  @operation({
    summary: "Get Gsps",
  })
  @get()
  static getGsps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gsp",
  })
  @post("{id}")
  static createGsp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
