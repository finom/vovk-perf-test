import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mews")
export default class MewController {
  @operation({
    summary: "Get Mews",
  })
  @get()
  static getMews = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mew",
  })
  @post("{id}")
  static createMew = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
