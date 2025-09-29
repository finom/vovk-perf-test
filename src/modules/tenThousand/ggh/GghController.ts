import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gghs")
export default class GghController {
  @operation({
    summary: "Get Gghs",
  })
  @get()
  static getGghs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ggh",
  })
  @post("{id}")
  static createGgh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
