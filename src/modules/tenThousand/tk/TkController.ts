import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("tks")
export default class TkController {
  @operation({
    summary: "Get Tks",
  })
  @get()
  static getTks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Tk",
  })
  @post("{id}")
  static createTk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
