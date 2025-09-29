import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ccds")
export default class CcdController {
  @operation({
    summary: "Get Ccds",
  })
  @get()
  static getCcds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ccd",
  })
  @post("{id}")
  static createCcd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
