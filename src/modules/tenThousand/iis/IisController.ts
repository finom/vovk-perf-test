import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iis")
export default class IisController {
  @operation({
    summary: "Get Iis",
  })
  @get()
  static getIis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iis",
  })
  @post("{id}")
  static createIis = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
