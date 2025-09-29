import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("afjs")
export default class AfjController {
  @operation({
    summary: "Get Afjs",
  })
  @get()
  static getAfjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Afj",
  })
  @post("{id}")
  static createAfj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
