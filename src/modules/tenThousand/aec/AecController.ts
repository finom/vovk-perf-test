import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aecs")
export default class AecController {
  @operation({
    summary: "Get Aecs",
  })
  @get()
  static getAecs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aec",
  })
  @post("{id}")
  static createAec = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
