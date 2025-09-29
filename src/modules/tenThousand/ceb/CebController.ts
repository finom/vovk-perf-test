import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cebs")
export default class CebController {
  @operation({
    summary: "Get Cebs",
  })
  @get()
  static getCebs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ceb",
  })
  @post("{id}")
  static createCeb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
