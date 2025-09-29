import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jrjs")
export default class JrjController {
  @operation({
    summary: "Get Jrjs",
  })
  @get()
  static getJrjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jrj",
  })
  @post("{id}")
  static createJrj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
