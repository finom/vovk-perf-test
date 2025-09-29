import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kzvs")
export default class KzvController {
  @operation({
    summary: "Get Kzvs",
  })
  @get()
  static getKzvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kzv",
  })
  @post("{id}")
  static createKzv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
