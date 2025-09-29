import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jcrs")
export default class JcrController {
  @operation({
    summary: "Get Jcrs",
  })
  @get()
  static getJcrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jcr",
  })
  @post("{id}")
  static createJcr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
