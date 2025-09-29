import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nmjs")
export default class NmjController {
  @operation({
    summary: "Get Nmjs",
  })
  @get()
  static getNmjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nmj",
  })
  @post("{id}")
  static createNmj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
