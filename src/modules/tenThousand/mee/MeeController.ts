import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mees")
export default class MeeController {
  @operation({
    summary: "Get Mees",
  })
  @get()
  static getMees = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mee",
  })
  @post("{id}")
  static createMee = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
