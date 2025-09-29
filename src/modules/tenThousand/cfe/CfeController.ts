import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cfes")
export default class CfeController {
  @operation({
    summary: "Get Cfes",
  })
  @get()
  static getCfes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cfe",
  })
  @post("{id}")
  static createCfe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
