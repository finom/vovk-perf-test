import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("byls")
export default class BylController {
  @operation({
    summary: "Get Byls",
  })
  @get()
  static getByls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Byl",
  })
  @post("{id}")
  static createByl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
