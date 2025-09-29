import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kses")
export default class KseController {
  @operation({
    summary: "Get Kses",
  })
  @get()
  static getKses = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kse",
  })
  @post("{id}")
  static createKse = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
