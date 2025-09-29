import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nbxes")
export default class NbxController {
  @operation({
    summary: "Get Nbxes",
  })
  @get()
  static getNbxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nbx",
  })
  @post("{id}")
  static createNbx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
