import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fyps")
export default class FypController {
  @operation({
    summary: "Get Fyps",
  })
  @get()
  static getFyps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fyp",
  })
  @post("{id}")
  static createFyp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
