import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jhos")
export default class JhoController {
  @operation({
    summary: "Get Jhos",
  })
  @get()
  static getJhos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jho",
  })
  @post("{id}")
  static createJho = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
