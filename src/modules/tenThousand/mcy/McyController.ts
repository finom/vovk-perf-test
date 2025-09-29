import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mcies")
export default class McyController {
  @operation({
    summary: "Get Mcies",
  })
  @get()
  static getMcies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mcy",
  })
  @post("{id}")
  static createMcy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
