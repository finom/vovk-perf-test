import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kpos")
export default class KpoController {
  @operation({
    summary: "Get Kpos",
  })
  @get()
  static getKpos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kpo",
  })
  @post("{id}")
  static createKpo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
