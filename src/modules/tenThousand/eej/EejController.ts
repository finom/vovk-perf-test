import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eejs")
export default class EejController {
  @operation({
    summary: "Get Eejs",
  })
  @get()
  static getEejs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eej",
  })
  @post("{id}")
  static createEej = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
