import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fwies")
export default class FwyController {
  @operation({
    summary: "Get Fwies",
  })
  @get()
  static getFwies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fwy",
  })
  @post("{id}")
  static createFwy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
