import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jqds")
export default class JqdController {
  @operation({
    summary: "Get Jqds",
  })
  @get()
  static getJqds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jqd",
  })
  @post("{id}")
  static createJqd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
