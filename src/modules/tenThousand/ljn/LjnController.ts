import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ljns")
export default class LjnController {
  @operation({
    summary: "Get Ljns",
  })
  @get()
  static getLjns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ljn",
  })
  @post("{id}")
  static createLjn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
