import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gous")
export default class GouController {
  @operation({
    summary: "Get Gous",
  })
  @get()
  static getGous = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gou",
  })
  @post("{id}")
  static createGou = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
