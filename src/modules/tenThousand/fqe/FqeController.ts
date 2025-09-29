import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fqes")
export default class FqeController {
  @operation({
    summary: "Get Fqes",
  })
  @get()
  static getFqes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fqe",
  })
  @post("{id}")
  static createFqe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
