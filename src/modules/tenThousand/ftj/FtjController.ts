import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ftjs")
export default class FtjController {
  @operation({
    summary: "Get Ftjs",
  })
  @get()
  static getFtjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ftj",
  })
  @post("{id}")
  static createFtj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
