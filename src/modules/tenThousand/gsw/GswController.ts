import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gsws")
export default class GswController {
  @operation({
    summary: "Get Gsws",
  })
  @get()
  static getGsws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gsw",
  })
  @post("{id}")
  static createGsw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
