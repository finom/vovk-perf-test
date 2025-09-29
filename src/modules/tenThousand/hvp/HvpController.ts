import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hvps")
export default class HvpController {
  @operation({
    summary: "Get Hvps",
  })
  @get()
  static getHvps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hvp",
  })
  @post("{id}")
  static createHvp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
