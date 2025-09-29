import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jqfs")
export default class JqfController {
  @operation({
    summary: "Get Jqfs",
  })
  @get()
  static getJqfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jqf",
  })
  @post("{id}")
  static createJqf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
