import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mnws")
export default class MnwController {
  @operation({
    summary: "Get Mnws",
  })
  @get()
  static getMnws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mnw",
  })
  @post("{id}")
  static createMnw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
