import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("als")
export default class AlsController {
  @operation({
    summary: "Get Als",
  })
  @get()
  static getAls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Als",
  })
  @post("{id}")
  static createAls = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
