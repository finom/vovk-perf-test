import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ibfs")
export default class IbfController {
  @operation({
    summary: "Get Ibfs",
  })
  @get()
  static getIbfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ibf",
  })
  @post("{id}")
  static createIbf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
