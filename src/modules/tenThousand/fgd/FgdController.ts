import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fgds")
export default class FgdController {
  @operation({
    summary: "Get Fgds",
  })
  @get()
  static getFgds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fgd",
  })
  @post("{id}")
  static createFgd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
