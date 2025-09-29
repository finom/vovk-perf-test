import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nsies")
export default class NsyController {
  @operation({
    summary: "Get Nsies",
  })
  @get()
  static getNsies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nsy",
  })
  @post("{id}")
  static createNsy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
