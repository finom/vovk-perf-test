import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("wfs")
export default class WfController {
  @operation({
    summary: "Get Wfs",
  })
  @get()
  static getWfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Wf",
  })
  @post("{id}")
  static createWf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
