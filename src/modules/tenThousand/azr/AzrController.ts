import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("azrs")
export default class AzrController {
  @operation({
    summary: "Get Azrs",
  })
  @get()
  static getAzrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Azr",
  })
  @post("{id}")
  static createAzr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
