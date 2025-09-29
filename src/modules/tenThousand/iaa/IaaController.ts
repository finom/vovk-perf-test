import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iaas")
export default class IaaController {
  @operation({
    summary: "Get Iaas",
  })
  @get()
  static getIaas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iaa",
  })
  @post("{id}")
  static createIaa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
