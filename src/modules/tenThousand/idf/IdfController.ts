import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("idfs")
export default class IdfController {
  @operation({
    summary: "Get Idfs",
  })
  @get()
  static getIdfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Idf",
  })
  @post("{id}")
  static createIdf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
