import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("egjs")
export default class EgjController {
  @operation({
    summary: "Get Egjs",
  })
  @get()
  static getEgjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Egj",
  })
  @post("{id}")
  static createEgj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
