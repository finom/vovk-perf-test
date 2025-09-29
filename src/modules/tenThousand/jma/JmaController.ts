import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jmas")
export default class JmaController {
  @operation({
    summary: "Get Jmas",
  })
  @get()
  static getJmas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jma",
  })
  @post("{id}")
  static createJma = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
