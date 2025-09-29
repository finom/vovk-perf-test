import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eags")
export default class EagController {
  @operation({
    summary: "Get Eags",
  })
  @get()
  static getEags = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eag",
  })
  @post("{id}")
  static createEag = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
