import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("evts")
export default class EvtController {
  @operation({
    summary: "Get Evts",
  })
  @get()
  static getEvts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Evt",
  })
  @post("{id}")
  static createEvt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
