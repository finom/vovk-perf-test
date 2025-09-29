import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fais")
export default class FaiController {
  @operation({
    summary: "Get Fais",
  })
  @get()
  static getFais = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fai",
  })
  @post("{id}")
  static createFai = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
