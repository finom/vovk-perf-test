import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ftms")
export default class FtmController {
  @operation({
    summary: "Get Ftms",
  })
  @get()
  static getFtms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ftm",
  })
  @post("{id}")
  static createFtm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
