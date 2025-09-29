import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kzies")
export default class KzyController {
  @operation({
    summary: "Get Kzies",
  })
  @get()
  static getKzies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kzy",
  })
  @post("{id}")
  static createKzy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
