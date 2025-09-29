import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ftqs")
export default class FtqController {
  @operation({
    summary: "Get Ftqs",
  })
  @get()
  static getFtqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ftq",
  })
  @post("{id}")
  static createFtq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
