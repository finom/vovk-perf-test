import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fgfs")
export default class FgfController {
  @operation({
    summary: "Get Fgfs",
  })
  @get()
  static getFgfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fgf",
  })
  @post("{id}")
  static createFgf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
