import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jhvs")
export default class JhvController {
  @operation({
    summary: "Get Jhvs",
  })
  @get()
  static getJhvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jhv",
  })
  @post("{id}")
  static createJhv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
