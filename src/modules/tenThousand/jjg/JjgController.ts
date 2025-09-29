import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jjgs")
export default class JjgController {
  @operation({
    summary: "Get Jjgs",
  })
  @get()
  static getJjgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jjg",
  })
  @post("{id}")
  static createJjg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
