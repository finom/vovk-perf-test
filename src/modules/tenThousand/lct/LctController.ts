import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lcts")
export default class LctController {
  @operation({
    summary: "Get Lcts",
  })
  @get()
  static getLcts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lct",
  })
  @post("{id}")
  static createLct = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
