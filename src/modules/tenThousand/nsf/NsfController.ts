import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nsfs")
export default class NsfController {
  @operation({
    summary: "Get Nsfs",
  })
  @get()
  static getNsfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nsf",
  })
  @post("{id}")
  static createNsf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
