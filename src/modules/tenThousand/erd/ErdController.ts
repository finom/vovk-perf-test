import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("erds")
export default class ErdController {
  @operation({
    summary: "Get Erds",
  })
  @get()
  static getErds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Erd",
  })
  @post("{id}")
  static createErd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
