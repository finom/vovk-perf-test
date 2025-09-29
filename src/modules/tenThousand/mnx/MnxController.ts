import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mnxes")
export default class MnxController {
  @operation({
    summary: "Get Mnxes",
  })
  @get()
  static getMnxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mnx",
  })
  @post("{id}")
  static createMnx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
