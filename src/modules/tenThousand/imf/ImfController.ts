import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("imfs")
export default class ImfController {
  @operation({
    summary: "Get Imfs",
  })
  @get()
  static getImfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Imf",
  })
  @post("{id}")
  static createImf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
