import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ikus")
export default class IkuController {
  @operation({
    summary: "Get Ikus",
  })
  @get()
  static getIkus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iku",
  })
  @post("{id}")
  static createIku = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
