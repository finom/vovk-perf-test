import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gaws")
export default class GawController {
  @operation({
    summary: "Get Gaws",
  })
  @get()
  static getGaws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gaw",
  })
  @post("{id}")
  static createGaw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
