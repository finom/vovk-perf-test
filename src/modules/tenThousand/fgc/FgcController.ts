import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fgcs")
export default class FgcController {
  @operation({
    summary: "Get Fgcs",
  })
  @get()
  static getFgcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fgc",
  })
  @post("{id}")
  static createFgc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
