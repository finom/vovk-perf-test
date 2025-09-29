import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aejs")
export default class AejController {
  @operation({
    summary: "Get Aejs",
  })
  @get()
  static getAejs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aej",
  })
  @post("{id}")
  static createAej = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
