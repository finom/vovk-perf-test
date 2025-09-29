import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("giqs")
export default class GiqController {
  @operation({
    summary: "Get Giqs",
  })
  @get()
  static getGiqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Giq",
  })
  @post("{id}")
  static createGiq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
