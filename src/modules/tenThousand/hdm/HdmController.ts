import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hdms")
export default class HdmController {
  @operation({
    summary: "Get Hdms",
  })
  @get()
  static getHdms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hdm",
  })
  @post("{id}")
  static createHdm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
