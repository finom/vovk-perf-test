import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nmks")
export default class NmkController {
  @operation({
    summary: "Get Nmks",
  })
  @get()
  static getNmks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nmk",
  })
  @post("{id}")
  static createNmk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
