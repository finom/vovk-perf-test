import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nrfs")
export default class NrfController {
  @operation({
    summary: "Get Nrfs",
  })
  @get()
  static getNrfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nrf",
  })
  @post("{id}")
  static createNrf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
