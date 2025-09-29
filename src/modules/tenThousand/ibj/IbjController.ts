import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ibjs")
export default class IbjController {
  @operation({
    summary: "Get Ibjs",
  })
  @get()
  static getIbjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ibj",
  })
  @post("{id}")
  static createIbj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
