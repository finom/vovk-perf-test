import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fls")
export default class FlController {
  @operation({
    summary: "Get Fls",
  })
  @get()
  static getFls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fl",
  })
  @post("{id}")
  static createFl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
