import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iebs")
export default class IebController {
  @operation({
    summary: "Get Iebs",
  })
  @get()
  static getIebs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ieb",
  })
  @post("{id}")
  static createIeb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
