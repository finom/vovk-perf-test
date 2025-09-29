import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kwls")
export default class KwlController {
  @operation({
    summary: "Get Kwls",
  })
  @get()
  static getKwls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kwl",
  })
  @post("{id}")
  static createKwl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
