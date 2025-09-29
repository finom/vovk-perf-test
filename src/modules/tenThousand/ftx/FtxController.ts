import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ftxes")
export default class FtxController {
  @operation({
    summary: "Get Ftxes",
  })
  @get()
  static getFtxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ftx",
  })
  @post("{id}")
  static createFtx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
