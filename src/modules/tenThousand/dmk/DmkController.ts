import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dmks")
export default class DmkController {
  @operation({
    summary: "Get Dmks",
  })
  @get()
  static getDmks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dmk",
  })
  @post("{id}")
  static createDmk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
