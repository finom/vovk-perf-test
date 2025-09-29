import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kbes")
export default class KbeController {
  @operation({
    summary: "Get Kbes",
  })
  @get()
  static getKbes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kbe",
  })
  @post("{id}")
  static createKbe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
