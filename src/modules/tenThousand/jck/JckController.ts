import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jcks")
export default class JckController {
  @operation({
    summary: "Get Jcks",
  })
  @get()
  static getJcks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jck",
  })
  @post("{id}")
  static createJck = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
