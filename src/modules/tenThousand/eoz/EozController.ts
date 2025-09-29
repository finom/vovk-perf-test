import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eozs")
export default class EozController {
  @operation({
    summary: "Get Eozs",
  })
  @get()
  static getEozs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eoz",
  })
  @post("{id}")
  static createEoz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
