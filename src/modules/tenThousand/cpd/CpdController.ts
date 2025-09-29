import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cpds")
export default class CpdController {
  @operation({
    summary: "Get Cpds",
  })
  @get()
  static getCpds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cpd",
  })
  @post("{id}")
  static createCpd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
