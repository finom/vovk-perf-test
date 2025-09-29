import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ibbs")
export default class IbbController {
  @operation({
    summary: "Get Ibbs",
  })
  @get()
  static getIbbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ibb",
  })
  @post("{id}")
  static createIbb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
