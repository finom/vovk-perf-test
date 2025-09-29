import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("moks")
export default class MokController {
  @operation({
    summary: "Get Moks",
  })
  @get()
  static getMoks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mok",
  })
  @post("{id}")
  static createMok = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
