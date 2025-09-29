import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jejs")
export default class JejController {
  @operation({
    summary: "Get Jejs",
  })
  @get()
  static getJejs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jej",
  })
  @post("{id}")
  static createJej = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
