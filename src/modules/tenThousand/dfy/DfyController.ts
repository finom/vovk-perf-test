import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dfies")
export default class DfyController {
  @operation({
    summary: "Get Dfies",
  })
  @get()
  static getDfies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dfy",
  })
  @post("{id}")
  static createDfy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
