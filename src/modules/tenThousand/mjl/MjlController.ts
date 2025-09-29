import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mjls")
export default class MjlController {
  @operation({
    summary: "Get Mjls",
  })
  @get()
  static getMjls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mjl",
  })
  @post("{id}")
  static createMjl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
