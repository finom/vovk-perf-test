import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cgfs")
export default class CgfController {
  @operation({
    summary: "Get Cgfs",
  })
  @get()
  static getCgfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cgf",
  })
  @post("{id}")
  static createCgf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
