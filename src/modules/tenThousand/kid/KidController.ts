import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kids")
export default class KidController {
  @operation({
    summary: "Get Kids",
  })
  @get()
  static getKids = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kid",
  })
  @post("{id}")
  static createKid = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
