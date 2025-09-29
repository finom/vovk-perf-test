import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iels")
export default class IelController {
  @operation({
    summary: "Get Iels",
  })
  @get()
  static getIels = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iel",
  })
  @post("{id}")
  static createIel = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
