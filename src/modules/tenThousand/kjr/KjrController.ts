import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kjrs")
export default class KjrController {
  @operation({
    summary: "Get Kjrs",
  })
  @get()
  static getKjrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kjr",
  })
  @post("{id}")
  static createKjr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
