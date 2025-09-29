import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mfies")
export default class MfyController {
  @operation({
    summary: "Get Mfies",
  })
  @get()
  static getMfies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mfy",
  })
  @post("{id}")
  static createMfy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
