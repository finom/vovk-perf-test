import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("egs")
export default class EgsController {
  @operation({
    summary: "Get Egs",
  })
  @get()
  static getEgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Egs",
  })
  @post("{id}")
  static createEgs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
