import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nags")
export default class NagController {
  @operation({
    summary: "Get Nags",
  })
  @get()
  static getNags = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nag",
  })
  @post("{id}")
  static createNag = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
