import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gzes")
export default class GzeController {
  @operation({
    summary: "Get Gzes",
  })
  @get()
  static getGzes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gze",
  })
  @post("{id}")
  static createGze = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
