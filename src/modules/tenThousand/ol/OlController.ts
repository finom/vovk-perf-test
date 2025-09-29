import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ols")
export default class OlController {
  @operation({
    summary: "Get Ols",
  })
  @get()
  static getOls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ol",
  })
  @post("{id}")
  static createOl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
