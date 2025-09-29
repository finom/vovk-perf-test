import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ibps")
export default class IbpController {
  @operation({
    summary: "Get Ibps",
  })
  @get()
  static getIbps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ibp",
  })
  @post("{id}")
  static createIbp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
