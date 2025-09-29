import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dois")
export default class DoiController {
  @operation({
    summary: "Get Dois",
  })
  @get()
  static getDois = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Doi",
  })
  @post("{id}")
  static createDoi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
