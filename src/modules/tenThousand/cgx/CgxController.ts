import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cgxes")
export default class CgxController {
  @operation({
    summary: "Get Cgxes",
  })
  @get()
  static getCgxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cgx",
  })
  @post("{id}")
  static createCgx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
