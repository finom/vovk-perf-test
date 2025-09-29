import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fqies")
export default class FqyController {
  @operation({
    summary: "Get Fqies",
  })
  @get()
  static getFqies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fqy",
  })
  @post("{id}")
  static createFqy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
