import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cyus")
export default class CyuController {
  @operation({
    summary: "Get Cyus",
  })
  @get()
  static getCyus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cyu",
  })
  @post("{id}")
  static createCyu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
