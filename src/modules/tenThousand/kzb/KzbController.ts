import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kzbs")
export default class KzbController {
  @operation({
    summary: "Get Kzbs",
  })
  @get()
  static getKzbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kzb",
  })
  @post("{id}")
  static createKzb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
