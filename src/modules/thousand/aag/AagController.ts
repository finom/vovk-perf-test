import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aags")
export default class AagController {
  @operation({
    summary: "Get Aags",
  })
  @get()
  static getAags = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aag",
  })
  @post("{id}")
  static createAag = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
