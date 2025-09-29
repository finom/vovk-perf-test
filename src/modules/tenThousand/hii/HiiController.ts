import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hiis")
export default class HiiController {
  @operation({
    summary: "Get Hiis",
  })
  @get()
  static getHiis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hii",
  })
  @post("{id}")
  static createHii = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
