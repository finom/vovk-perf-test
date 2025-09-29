import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kdis")
export default class KdiController {
  @operation({
    summary: "Get Kdis",
  })
  @get()
  static getKdis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kdi",
  })
  @post("{id}")
  static createKdi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
