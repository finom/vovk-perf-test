import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kyds")
export default class KydController {
  @operation({
    summary: "Get Kyds",
  })
  @get()
  static getKyds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kyd",
  })
  @post("{id}")
  static createKyd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
