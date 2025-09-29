import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jds")
export default class JdsController {
  @operation({
    summary: "Get Jds",
  })
  @get()
  static getJds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jds",
  })
  @post("{id}")
  static createJds = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
