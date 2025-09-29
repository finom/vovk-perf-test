import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hons")
export default class HonController {
  @operation({
    summary: "Get Hons",
  })
  @get()
  static getHons = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hon",
  })
  @post("{id}")
  static createHon = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
