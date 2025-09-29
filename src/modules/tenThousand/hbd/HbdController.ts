import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hbds")
export default class HbdController {
  @operation({
    summary: "Get Hbds",
  })
  @get()
  static getHbds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hbd",
  })
  @post("{id}")
  static createHbd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
