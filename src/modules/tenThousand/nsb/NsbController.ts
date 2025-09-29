import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nsbs")
export default class NsbController {
  @operation({
    summary: "Get Nsbs",
  })
  @get()
  static getNsbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nsb",
  })
  @post("{id}")
  static createNsb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
