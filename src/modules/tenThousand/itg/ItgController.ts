import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("itgs")
export default class ItgController {
  @operation({
    summary: "Get Itgs",
  })
  @get()
  static getItgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Itg",
  })
  @post("{id}")
  static createItg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
