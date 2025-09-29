import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jats")
export default class JatController {
  @operation({
    summary: "Get Jats",
  })
  @get()
  static getJats = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jat",
  })
  @post("{id}")
  static createJat = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
