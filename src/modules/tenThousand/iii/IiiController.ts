import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iiis")
export default class IiiController {
  @operation({
    summary: "Get Iiis",
  })
  @get()
  static getIiis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iii",
  })
  @post("{id}")
  static createIii = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
