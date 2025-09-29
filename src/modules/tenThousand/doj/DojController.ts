import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dojs")
export default class DojController {
  @operation({
    summary: "Get Dojs",
  })
  @get()
  static getDojs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Doj",
  })
  @post("{id}")
  static createDoj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
