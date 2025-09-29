import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("sds")
export default class SdController {
  @operation({
    summary: "Get Sds",
  })
  @get()
  static getSds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Sd",
  })
  @post("{id}")
  static createSd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
