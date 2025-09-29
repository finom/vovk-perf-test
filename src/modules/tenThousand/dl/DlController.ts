import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dls")
export default class DlController {
  @operation({
    summary: "Get Dls",
  })
  @get()
  static getDls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dl",
  })
  @post("{id}")
  static createDl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
