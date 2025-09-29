import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dews")
export default class DewController {
  @operation({
    summary: "Get Dews",
  })
  @get()
  static getDews = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dew",
  })
  @post("{id}")
  static createDew = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
