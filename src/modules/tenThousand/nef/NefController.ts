import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nefs")
export default class NefController {
  @operation({
    summary: "Get Nefs",
  })
  @get()
  static getNefs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nef",
  })
  @post("{id}")
  static createNef = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
