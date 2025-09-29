import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mfes")
export default class MfeController {
  @operation({
    summary: "Get Mfes",
  })
  @get()
  static getMfes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mfe",
  })
  @post("{id}")
  static createMfe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
