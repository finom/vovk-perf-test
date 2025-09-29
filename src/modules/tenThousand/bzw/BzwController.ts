import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bzws")
export default class BzwController {
  @operation({
    summary: "Get Bzws",
  })
  @get()
  static getBzws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bzw",
  })
  @post("{id}")
  static createBzw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
