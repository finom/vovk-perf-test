import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fs")
export default class FController {
  @operation({
    summary: "Get FS",
  })
  @get()
  static getFS = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create F",
  })
  @post("{id}")
  static createF = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
