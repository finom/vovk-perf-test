import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nsps")
export default class NspController {
  @operation({
    summary: "Get Nsps",
  })
  @get()
  static getNsps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nsp",
  })
  @post("{id}")
  static createNsp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
