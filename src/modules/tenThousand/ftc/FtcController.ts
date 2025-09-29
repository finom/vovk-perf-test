import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ftcs")
export default class FtcController {
  @operation({
    summary: "Get Ftcs",
  })
  @get()
  static getFtcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ftc",
  })
  @post("{id}")
  static createFtc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
