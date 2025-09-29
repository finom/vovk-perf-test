import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jts")
export default class JtsController {
  @operation({
    summary: "Get Jts",
  })
  @get()
  static getJts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jts",
  })
  @post("{id}")
  static createJts = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
