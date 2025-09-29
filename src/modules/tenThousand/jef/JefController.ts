import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jefs")
export default class JefController {
  @operation({
    summary: "Get Jefs",
  })
  @get()
  static getJefs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jef",
  })
  @post("{id}")
  static createJef = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
