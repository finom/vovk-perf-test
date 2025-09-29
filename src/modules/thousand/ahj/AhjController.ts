import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ahjs")
export default class AhjController {
  @operation({
    summary: "Get Ahjs",
  })
  @get()
  static getAhjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ahj",
  })
  @post("{id}")
  static createAhj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
