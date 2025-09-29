import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ltfs")
export default class LtfController {
  @operation({
    summary: "Get Ltfs",
  })
  @get()
  static getLtfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ltf",
  })
  @post("{id}")
  static createLtf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
