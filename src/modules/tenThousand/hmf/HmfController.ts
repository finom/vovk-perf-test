import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hmfs")
export default class HmfController {
  @operation({
    summary: "Get Hmfs",
  })
  @get()
  static getHmfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hmf",
  })
  @post("{id}")
  static createHmf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
