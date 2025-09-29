import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ibts")
export default class IbtController {
  @operation({
    summary: "Get Ibts",
  })
  @get()
  static getIbts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ibt",
  })
  @post("{id}")
  static createIbt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
