import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jtzs")
export default class JtzController {
  @operation({
    summary: "Get Jtzs",
  })
  @get()
  static getJtzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jtz",
  })
  @post("{id}")
  static createJtz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
