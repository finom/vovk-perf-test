import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gkrs")
export default class GkrController {
  @operation({
    summary: "Get Gkrs",
  })
  @get()
  static getGkrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gkr",
  })
  @post("{id}")
  static createGkr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
