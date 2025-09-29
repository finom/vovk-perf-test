import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eys")
export default class EysController {
  @operation({
    summary: "Get Eys",
  })
  @get()
  static getEys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eys",
  })
  @post("{id}")
  static createEys = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
