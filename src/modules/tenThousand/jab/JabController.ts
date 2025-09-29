import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jabs")
export default class JabController {
  @operation({
    summary: "Get Jabs",
  })
  @get()
  static getJabs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jab",
  })
  @post("{id}")
  static createJab = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
