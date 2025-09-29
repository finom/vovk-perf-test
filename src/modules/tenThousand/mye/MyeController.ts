import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("myes")
export default class MyeController {
  @operation({
    summary: "Get Myes",
  })
  @get()
  static getMyes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mye",
  })
  @post("{id}")
  static createMye = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
