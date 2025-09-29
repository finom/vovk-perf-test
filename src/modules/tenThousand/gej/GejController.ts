import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gejs")
export default class GejController {
  @operation({
    summary: "Get Gejs",
  })
  @get()
  static getGejs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gej",
  })
  @post("{id}")
  static createGej = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
