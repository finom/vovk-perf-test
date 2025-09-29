import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("giis")
export default class GiiController {
  @operation({
    summary: "Get Giis",
  })
  @get()
  static getGiis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gii",
  })
  @post("{id}")
  static createGii = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
