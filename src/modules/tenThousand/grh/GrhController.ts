import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("grhs")
export default class GrhController {
  @operation({
    summary: "Get Grhs",
  })
  @get()
  static getGrhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Grh",
  })
  @post("{id}")
  static createGrh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
