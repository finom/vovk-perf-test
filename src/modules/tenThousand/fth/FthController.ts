import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fths")
export default class FthController {
  @operation({
    summary: "Get Fths",
  })
  @get()
  static getFths = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fth",
  })
  @post("{id}")
  static createFth = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
