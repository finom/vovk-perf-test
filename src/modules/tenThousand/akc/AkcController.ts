import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("akcs")
export default class AkcController {
  @operation({
    summary: "Get Akcs",
  })
  @get()
  static getAkcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Akc",
  })
  @post("{id}")
  static createAkc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
