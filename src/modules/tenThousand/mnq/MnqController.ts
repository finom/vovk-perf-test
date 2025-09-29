import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mnqs")
export default class MnqController {
  @operation({
    summary: "Get Mnqs",
  })
  @get()
  static getMnqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mnq",
  })
  @post("{id}")
  static createMnq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
