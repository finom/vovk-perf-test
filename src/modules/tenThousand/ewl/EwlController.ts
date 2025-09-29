import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ewls")
export default class EwlController {
  @operation({
    summary: "Get Ewls",
  })
  @get()
  static getEwls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ewl",
  })
  @post("{id}")
  static createEwl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
