import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fags")
export default class FagController {
  @operation({
    summary: "Get Fags",
  })
  @get()
  static getFags = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fag",
  })
  @post("{id}")
  static createFag = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
