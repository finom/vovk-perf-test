import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bzbs")
export default class BzbController {
  @operation({
    summary: "Get Bzbs",
  })
  @get()
  static getBzbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bzb",
  })
  @post("{id}")
  static createBzb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
