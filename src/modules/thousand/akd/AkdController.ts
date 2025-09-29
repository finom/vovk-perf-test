import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("akds")
export default class AkdController {
  @operation({
    summary: "Get Akds",
  })
  @get()
  static getAkds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Akd",
  })
  @post("{id}")
  static createAkd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
