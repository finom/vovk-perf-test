import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hyis")
export default class HyiController {
  @operation({
    summary: "Get Hyis",
  })
  @get()
  static getHyis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hyi",
  })
  @post("{id}")
  static createHyi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
