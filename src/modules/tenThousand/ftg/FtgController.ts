import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ftgs")
export default class FtgController {
  @operation({
    summary: "Get Ftgs",
  })
  @get()
  static getFtgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ftg",
  })
  @post("{id}")
  static createFtg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
