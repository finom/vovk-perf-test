import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eigs")
export default class EigController {
  @operation({
    summary: "Get Eigs",
  })
  @get()
  static getEigs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eig",
  })
  @post("{id}")
  static createEig = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
