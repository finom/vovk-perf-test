import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mzds")
export default class MzdController {
  @operation({
    summary: "Get Mzds",
  })
  @get()
  static getMzds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mzd",
  })
  @post("{id}")
  static createMzd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
