import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iiqs")
export default class IiqController {
  @operation({
    summary: "Get Iiqs",
  })
  @get()
  static getIiqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iiq",
  })
  @post("{id}")
  static createIiq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
