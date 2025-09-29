import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cgks")
export default class CgkController {
  @operation({
    summary: "Get Cgks",
  })
  @get()
  static getCgks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cgk",
  })
  @post("{id}")
  static createCgk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
