import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("npms")
export default class NpmController {
  @operation({
    summary: "Get Npms",
  })
  @get()
  static getNpms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Npm",
  })
  @post("{id}")
  static createNpm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
