import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nsls")
export default class NslController {
  @operation({
    summary: "Get Nsls",
  })
  @get()
  static getNsls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nsl",
  })
  @post("{id}")
  static createNsl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
