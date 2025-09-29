import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lags")
export default class LagController {
  @operation({
    summary: "Get Lags",
  })
  @get()
  static getLags = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lag",
  })
  @post("{id}")
  static createLag = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
