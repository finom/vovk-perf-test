import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bzms")
export default class BzmController {
  @operation({
    summary: "Get Bzms",
  })
  @get()
  static getBzms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bzm",
  })
  @post("{id}")
  static createBzm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
