import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eihs")
export default class EihController {
  @operation({
    summary: "Get Eihs",
  })
  @get()
  static getEihs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eih",
  })
  @post("{id}")
  static createEih = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
