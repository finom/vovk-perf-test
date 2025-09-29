import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gmfs")
export default class GmfController {
  @operation({
    summary: "Get Gmfs",
  })
  @get()
  static getGmfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gmf",
  })
  @post("{id}")
  static createGmf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
