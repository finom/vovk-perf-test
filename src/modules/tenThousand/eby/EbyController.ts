import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ebies")
export default class EbyController {
  @operation({
    summary: "Get Ebies",
  })
  @get()
  static getEbies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eby",
  })
  @post("{id}")
  static createEby = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
