import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ndis")
export default class NdiController {
  @operation({
    summary: "Get Ndis",
  })
  @get()
  static getNdis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ndi",
  })
  @post("{id}")
  static createNdi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
