import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bzds")
export default class BzdController {
  @operation({
    summary: "Get Bzds",
  })
  @get()
  static getBzds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bzd",
  })
  @post("{id}")
  static createBzd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
