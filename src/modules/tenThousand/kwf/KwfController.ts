import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kwfs")
export default class KwfController {
  @operation({
    summary: "Get Kwfs",
  })
  @get()
  static getKwfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kwf",
  })
  @post("{id}")
  static createKwf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
