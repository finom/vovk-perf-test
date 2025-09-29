import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cgds")
export default class CgdController {
  @operation({
    summary: "Get Cgds",
  })
  @get()
  static getCgds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cgd",
  })
  @post("{id}")
  static createCgd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
