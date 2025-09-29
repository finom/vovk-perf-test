import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hejs")
export default class HejController {
  @operation({
    summary: "Get Hejs",
  })
  @get()
  static getHejs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hej",
  })
  @post("{id}")
  static createHej = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
