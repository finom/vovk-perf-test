import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eids")
export default class EidController {
  @operation({
    summary: "Get Eids",
  })
  @get()
  static getEids = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eid",
  })
  @post("{id}")
  static createEid = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
