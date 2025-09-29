import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("myrs")
export default class MyrController {
  @operation({
    summary: "Get Myrs",
  })
  @get()
  static getMyrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Myr",
  })
  @post("{id}")
  static createMyr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
