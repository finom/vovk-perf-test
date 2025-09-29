import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ljps")
export default class LjpController {
  @operation({
    summary: "Get Ljps",
  })
  @get()
  static getLjps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ljp",
  })
  @post("{id}")
  static createLjp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
