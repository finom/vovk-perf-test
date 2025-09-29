import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jhjs")
export default class JhjController {
  @operation({
    summary: "Get Jhjs",
  })
  @get()
  static getJhjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jhj",
  })
  @post("{id}")
  static createJhj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
