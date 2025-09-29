import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ibks")
export default class IbkController {
  @operation({
    summary: "Get Ibks",
  })
  @get()
  static getIbks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ibk",
  })
  @post("{id}")
  static createIbk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
