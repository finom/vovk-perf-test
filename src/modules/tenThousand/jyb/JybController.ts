import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jybs")
export default class JybController {
  @operation({
    summary: "Get Jybs",
  })
  @get()
  static getJybs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jyb",
  })
  @post("{id}")
  static createJyb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
