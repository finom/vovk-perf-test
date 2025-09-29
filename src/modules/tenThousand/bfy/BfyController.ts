import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bfies")
export default class BfyController {
  @operation({
    summary: "Get Bfies",
  })
  @get()
  static getBfies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bfy",
  })
  @post("{id}")
  static createBfy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
