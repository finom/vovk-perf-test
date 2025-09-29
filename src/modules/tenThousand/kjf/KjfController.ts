import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kjfs")
export default class KjfController {
  @operation({
    summary: "Get Kjfs",
  })
  @get()
  static getKjfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kjf",
  })
  @post("{id}")
  static createKjf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
