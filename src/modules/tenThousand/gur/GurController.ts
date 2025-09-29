import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gurs")
export default class GurController {
  @operation({
    summary: "Get Gurs",
  })
  @get()
  static getGurs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gur",
  })
  @post("{id}")
  static createGur = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
