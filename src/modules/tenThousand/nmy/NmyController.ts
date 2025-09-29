import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nmies")
export default class NmyController {
  @operation({
    summary: "Get Nmies",
  })
  @get()
  static getNmies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nmy",
  })
  @post("{id}")
  static createNmy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
