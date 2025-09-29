import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("czds")
export default class CzdController {
  @operation({
    summary: "Get Czds",
  })
  @get()
  static getCzds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Czd",
  })
  @post("{id}")
  static createCzd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
