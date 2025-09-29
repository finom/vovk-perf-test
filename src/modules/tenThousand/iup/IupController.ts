import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iups")
export default class IupController {
  @operation({
    summary: "Get Iups",
  })
  @get()
  static getIups = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iup",
  })
  @post("{id}")
  static createIup = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
