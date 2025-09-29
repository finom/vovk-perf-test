import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mnks")
export default class MnkController {
  @operation({
    summary: "Get Mnks",
  })
  @get()
  static getMnks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mnk",
  })
  @post("{id}")
  static createMnk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
