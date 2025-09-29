import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("akfs")
export default class AkfController {
  @operation({
    summary: "Get Akfs",
  })
  @get()
  static getAkfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Akf",
  })
  @post("{id}")
  static createAkf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
