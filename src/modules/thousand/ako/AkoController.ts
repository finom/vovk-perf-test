import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("akos")
export default class AkoController {
  @operation({
    summary: "Get Akos",
  })
  @get()
  static getAkos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ako",
  })
  @post("{id}")
  static createAko = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
