import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jpps")
export default class JppController {
  @operation({
    summary: "Get Jpps",
  })
  @get()
  static getJpps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jpp",
  })
  @post("{id}")
  static createJpp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
