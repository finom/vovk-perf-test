import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gwhs")
export default class GwhController {
  @operation({
    summary: "Get Gwhs",
  })
  @get()
  static getGwhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gwh",
  })
  @post("{id}")
  static createGwh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
