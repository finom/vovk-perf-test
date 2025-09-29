import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fqcs")
export default class FqcController {
  @operation({
    summary: "Get Fqcs",
  })
  @get()
  static getFqcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fqc",
  })
  @post("{id}")
  static createFqc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
