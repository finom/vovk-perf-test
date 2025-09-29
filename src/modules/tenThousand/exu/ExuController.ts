import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("exus")
export default class ExuController {
  @operation({
    summary: "Get Exus",
  })
  @get()
  static getExus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Exu",
  })
  @post("{id}")
  static createExu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
