import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fifs")
export default class FifController {
  @operation({
    summary: "Get Fifs",
  })
  @get()
  static getFifs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fif",
  })
  @post("{id}")
  static createFif = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
