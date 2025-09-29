import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("erfs")
export default class ErfController {
  @operation({
    summary: "Get Erfs",
  })
  @get()
  static getErfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Erf",
  })
  @post("{id}")
  static createErf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
