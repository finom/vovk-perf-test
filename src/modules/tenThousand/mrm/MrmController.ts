import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mrms")
export default class MrmController {
  @operation({
    summary: "Get Mrms",
  })
  @get()
  static getMrms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mrm",
  })
  @post("{id}")
  static createMrm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
