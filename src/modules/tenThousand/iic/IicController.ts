import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iics")
export default class IicController {
  @operation({
    summary: "Get Iics",
  })
  @get()
  static getIics = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iic",
  })
  @post("{id}")
  static createIic = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
