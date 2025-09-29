import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("alps")
export default class AlpController {
  @operation({
    summary: "Get Alps",
  })
  @get()
  static getAlps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Alp",
  })
  @post("{id}")
  static createAlp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
