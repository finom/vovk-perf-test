import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lobs")
export default class LobController {
  @operation({
    summary: "Get Lobs",
  })
  @get()
  static getLobs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lob",
  })
  @post("{id}")
  static createLob = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
