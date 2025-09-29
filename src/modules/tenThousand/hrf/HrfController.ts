import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hrfs")
export default class HrfController {
  @operation({
    summary: "Get Hrfs",
  })
  @get()
  static getHrfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hrf",
  })
  @post("{id}")
  static createHrf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
