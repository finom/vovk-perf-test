import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fqds")
export default class FqdController {
  @operation({
    summary: "Get Fqds",
  })
  @get()
  static getFqds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fqd",
  })
  @post("{id}")
  static createFqd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
