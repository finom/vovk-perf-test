import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ebfs")
export default class EbfController {
  @operation({
    summary: "Get Ebfs",
  })
  @get()
  static getEbfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ebf",
  })
  @post("{id}")
  static createEbf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
