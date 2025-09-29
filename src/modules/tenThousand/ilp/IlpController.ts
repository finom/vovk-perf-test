import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ilps")
export default class IlpController {
  @operation({
    summary: "Get Ilps",
  })
  @get()
  static getIlps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ilp",
  })
  @post("{id}")
  static createIlp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
