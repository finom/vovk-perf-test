import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mncs")
export default class MncController {
  @operation({
    summary: "Get Mncs",
  })
  @get()
  static getMncs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mnc",
  })
  @post("{id}")
  static createMnc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
