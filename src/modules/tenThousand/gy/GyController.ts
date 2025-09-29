import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gies")
export default class GyController {
  @operation({
    summary: "Get Gies",
  })
  @get()
  static getGies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gy",
  })
  @post("{id}")
  static createGy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
