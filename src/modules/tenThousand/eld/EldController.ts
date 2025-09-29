import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("elds")
export default class EldController {
  @operation({
    summary: "Get Elds",
  })
  @get()
  static getElds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eld",
  })
  @post("{id}")
  static createEld = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
