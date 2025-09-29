import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ftfs")
export default class FtfController {
  @operation({
    summary: "Get Ftfs",
  })
  @get()
  static getFtfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ftf",
  })
  @post("{id}")
  static createFtf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
