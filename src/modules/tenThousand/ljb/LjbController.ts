import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ljbs")
export default class LjbController {
  @operation({
    summary: "Get Ljbs",
  })
  @get()
  static getLjbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ljb",
  })
  @post("{id}")
  static createLjb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
