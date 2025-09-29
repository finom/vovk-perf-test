import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bejs")
export default class BejController {
  @operation({
    summary: "Get Bejs",
  })
  @get()
  static getBejs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bej",
  })
  @post("{id}")
  static createBej = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
