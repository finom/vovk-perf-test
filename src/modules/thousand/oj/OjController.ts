import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ojs")
export default class OjController {
  @operation({
    summary: "Get Ojs",
  })
  @get()
  static getOjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Oj",
  })
  @post("{id}")
  static createOj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
