import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("alis")
export default class AliController {
  @operation({
    summary: "Get Alis",
  })
  @get()
  static getAlis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ali",
  })
  @post("{id}")
  static createAli = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
