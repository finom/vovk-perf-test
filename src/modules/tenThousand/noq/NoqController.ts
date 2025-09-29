import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("noqs")
export default class NoqController {
  @operation({
    summary: "Get Noqs",
  })
  @get()
  static getNoqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Noq",
  })
  @post("{id}")
  static createNoq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
