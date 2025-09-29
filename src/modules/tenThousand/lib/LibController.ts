import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("libs")
export default class LibController {
  @operation({
    summary: "Get Libs",
  })
  @get()
  static getLibs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lib",
  })
  @post("{id}")
  static createLib = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
