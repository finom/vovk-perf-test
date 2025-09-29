import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("akrs")
export default class AkrController {
  @operation({
    summary: "Get Akrs",
  })
  @get()
  static getAkrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Akr",
  })
  @post("{id}")
  static createAkr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
