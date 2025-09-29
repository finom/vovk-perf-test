import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kbcs")
export default class KbcController {
  @operation({
    summary: "Get Kbcs",
  })
  @get()
  static getKbcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kbc",
  })
  @post("{id}")
  static createKbc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
