import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fgqs")
export default class FgqController {
  @operation({
    summary: "Get Fgqs",
  })
  @get()
  static getFgqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fgq",
  })
  @post("{id}")
  static createFgq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
