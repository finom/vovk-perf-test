import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kyls")
export default class KylController {
  @operation({
    summary: "Get Kyls",
  })
  @get()
  static getKyls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kyl",
  })
  @post("{id}")
  static createKyl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
