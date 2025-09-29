import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jhgs")
export default class JhgController {
  @operation({
    summary: "Get Jhgs",
  })
  @get()
  static getJhgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jhg",
  })
  @post("{id}")
  static createJhg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
