import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kgus")
export default class KguController {
  @operation({
    summary: "Get Kgus",
  })
  @get()
  static getKgus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kgu",
  })
  @post("{id}")
  static createKgu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
