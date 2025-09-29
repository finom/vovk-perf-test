import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ndies")
export default class NdyController {
  @operation({
    summary: "Get Ndies",
  })
  @get()
  static getNdies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ndy",
  })
  @post("{id}")
  static createNdy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
