import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("awies")
export default class AwyController {
  @operation({
    summary: "Get Awies",
  })
  @get()
  static getAwies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Awy",
  })
  @post("{id}")
  static createAwy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
