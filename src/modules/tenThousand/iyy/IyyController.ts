import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iyys")
export default class IyyController {
  @operation({
    summary: "Get Iyys",
  })
  @get()
  static getIyys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iyy",
  })
  @post("{id}")
  static createIyy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
