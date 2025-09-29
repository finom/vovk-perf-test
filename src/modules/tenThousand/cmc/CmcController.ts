import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cmcs")
export default class CmcController {
  @operation({
    summary: "Get Cmcs",
  })
  @get()
  static getCmcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cmc",
  })
  @post("{id}")
  static createCmc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
