import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("baps")
export default class BapController {
  @operation({
    summary: "Get Baps",
  })
  @get()
  static getBaps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bap",
  })
  @post("{id}")
  static createBap = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
