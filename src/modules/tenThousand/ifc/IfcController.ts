import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ifcs")
export default class IfcController {
  @operation({
    summary: "Get Ifcs",
  })
  @get()
  static getIfcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ifc",
  })
  @post("{id}")
  static createIfc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
