import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bzis")
export default class BziController {
  @operation({
    summary: "Get Bzis",
  })
  @get()
  static getBzis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bzi",
  })
  @post("{id}")
  static createBzi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
