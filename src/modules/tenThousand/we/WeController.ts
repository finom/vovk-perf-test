import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("we")
export default class WeController {
  @operation({
    summary: "Get We",
  })
  @get()
  static getWe = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create We",
  })
  @post("{id}")
  static createWe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
