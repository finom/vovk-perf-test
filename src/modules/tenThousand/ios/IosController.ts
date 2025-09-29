import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ios")
export default class IosController {
  @operation({
    summary: "Get Ios",
  })
  @get()
  static getIos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ios",
  })
  @post("{id}")
  static createIos = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
