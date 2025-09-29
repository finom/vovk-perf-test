import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cfies")
export default class CfyController {
  @operation({
    summary: "Get Cfies",
  })
  @get()
  static getCfies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cfy",
  })
  @post("{id}")
  static createCfy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
