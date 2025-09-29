import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dvws")
export default class DvwController {
  @operation({
    summary: "Get Dvws",
  })
  @get()
  static getDvws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dvw",
  })
  @post("{id}")
  static createDvw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
