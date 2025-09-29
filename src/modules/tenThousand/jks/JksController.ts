import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jks")
export default class JksController {
  @operation({
    summary: "Get Jks",
  })
  @get()
  static getJks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jks",
  })
  @post("{id}")
  static createJks = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
