import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bubs")
export default class BubController {
  @operation({
    summary: "Get Bubs",
  })
  @get()
  static getBubs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bub",
  })
  @post("{id}")
  static createBub = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
