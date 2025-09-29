import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lbas")
export default class LbaController {
  @operation({
    summary: "Get Lbas",
  })
  @get()
  static getLbas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lba",
  })
  @post("{id}")
  static createLba = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
