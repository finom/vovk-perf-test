import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bgies")
export default class BgyController {
  @operation({
    summary: "Get Bgies",
  })
  @get()
  static getBgies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bgy",
  })
  @post("{id}")
  static createBgy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
