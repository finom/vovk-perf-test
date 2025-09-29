import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gmjs")
export default class GmjController {
  @operation({
    summary: "Get Gmjs",
  })
  @get()
  static getGmjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gmj",
  })
  @post("{id}")
  static createGmj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
