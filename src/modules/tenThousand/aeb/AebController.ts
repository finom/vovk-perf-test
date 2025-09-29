import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aebs")
export default class AebController {
  @operation({
    summary: "Get Aebs",
  })
  @get()
  static getAebs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aeb",
  })
  @post("{id}")
  static createAeb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
