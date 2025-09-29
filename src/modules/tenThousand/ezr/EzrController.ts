import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ezrs")
export default class EzrController {
  @operation({
    summary: "Get Ezrs",
  })
  @get()
  static getEzrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ezr",
  })
  @post("{id}")
  static createEzr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
