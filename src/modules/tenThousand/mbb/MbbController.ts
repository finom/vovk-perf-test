import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mbbs")
export default class MbbController {
  @operation({
    summary: "Get Mbbs",
  })
  @get()
  static getMbbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mbb",
  })
  @post("{id}")
  static createMbb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
