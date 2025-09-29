import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lties")
export default class LtyController {
  @operation({
    summary: "Get Lties",
  })
  @get()
  static getLties = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lty",
  })
  @post("{id}")
  static createLty = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
