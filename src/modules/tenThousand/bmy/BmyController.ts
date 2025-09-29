import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bmies")
export default class BmyController {
  @operation({
    summary: "Get Bmies",
  })
  @get()
  static getBmies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bmy",
  })
  @post("{id}")
  static createBmy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
