import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cets")
export default class CetController {
  @operation({
    summary: "Get Cets",
  })
  @get()
  static getCets = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cet",
  })
  @post("{id}")
  static createCet = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
