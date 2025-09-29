import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iats")
export default class IatController {
  @operation({
    summary: "Get Iats",
  })
  @get()
  static getIats = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iat",
  })
  @post("{id}")
  static createIat = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
