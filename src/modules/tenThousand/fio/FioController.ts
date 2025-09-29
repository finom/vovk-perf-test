import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fios")
export default class FioController {
  @operation({
    summary: "Get Fios",
  })
  @get()
  static getFios = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fio",
  })
  @post("{id}")
  static createFio = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
