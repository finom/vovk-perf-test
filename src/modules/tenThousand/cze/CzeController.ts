import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("czes")
export default class CzeController {
  @operation({
    summary: "Get Czes",
  })
  @get()
  static getCzes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cze",
  })
  @post("{id}")
  static createCze = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
