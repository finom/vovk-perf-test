import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gihs")
export default class GihController {
  @operation({
    summary: "Get Gihs",
  })
  @get()
  static getGihs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gih",
  })
  @post("{id}")
  static createGih = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
