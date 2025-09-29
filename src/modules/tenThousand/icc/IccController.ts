import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iccs")
export default class IccController {
  @operation({
    summary: "Get Iccs",
  })
  @get()
  static getIccs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Icc",
  })
  @post("{id}")
  static createIcc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
