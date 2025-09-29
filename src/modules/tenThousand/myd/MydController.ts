import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("myds")
export default class MydController {
  @operation({
    summary: "Get Myds",
  })
  @get()
  static getMyds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Myd",
  })
  @post("{id}")
  static createMyd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
