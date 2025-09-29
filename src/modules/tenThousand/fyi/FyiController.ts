import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fyis")
export default class FyiController {
  @operation({
    summary: "Get Fyis",
  })
  @get()
  static getFyis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fyi",
  })
  @post("{id}")
  static createFyi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
