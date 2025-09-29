import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("joes")
export default class JoeController {
  @operation({
    summary: "Get Joes",
  })
  @get()
  static getJoes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Joe",
  })
  @post("{id}")
  static createJoe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
