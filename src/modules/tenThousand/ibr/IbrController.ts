import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ibrs")
export default class IbrController {
  @operation({
    summary: "Get Ibrs",
  })
  @get()
  static getIbrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ibr",
  })
  @post("{id}")
  static createIbr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
