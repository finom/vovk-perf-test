import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iojs")
export default class IojController {
  @operation({
    summary: "Get Iojs",
  })
  @get()
  static getIojs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ioj",
  })
  @post("{id}")
  static createIoj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
