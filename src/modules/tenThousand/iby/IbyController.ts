import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ibies")
export default class IbyController {
  @operation({
    summary: "Get Ibies",
  })
  @get()
  static getIbies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iby",
  })
  @post("{id}")
  static createIby = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
