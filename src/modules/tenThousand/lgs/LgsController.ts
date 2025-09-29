import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lgs")
export default class LgsController {
  @operation({
    summary: "Get Lgs",
  })
  @get()
  static getLgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lgs",
  })
  @post("{id}")
  static createLgs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
