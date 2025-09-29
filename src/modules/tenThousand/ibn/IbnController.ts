import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ibns")
export default class IbnController {
  @operation({
    summary: "Get Ibns",
  })
  @get()
  static getIbns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ibn",
  })
  @post("{id}")
  static createIbn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
