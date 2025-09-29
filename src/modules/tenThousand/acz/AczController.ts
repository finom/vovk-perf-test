import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aczs")
export default class AczController {
  @operation({
    summary: "Get Aczs",
  })
  @get()
  static getAczs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Acz",
  })
  @post("{id}")
  static createAcz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
