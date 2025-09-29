import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fqfs")
export default class FqfController {
  @operation({
    summary: "Get Fqfs",
  })
  @get()
  static getFqfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fqf",
  })
  @post("{id}")
  static createFqf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
