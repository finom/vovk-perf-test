import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dejs")
export default class DejController {
  @operation({
    summary: "Get Dejs",
  })
  @get()
  static getDejs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dej",
  })
  @post("{id}")
  static createDej = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
