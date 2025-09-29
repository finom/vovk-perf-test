import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nsws")
export default class NswController {
  @operation({
    summary: "Get Nsws",
  })
  @get()
  static getNsws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nsw",
  })
  @post("{id}")
  static createNsw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
