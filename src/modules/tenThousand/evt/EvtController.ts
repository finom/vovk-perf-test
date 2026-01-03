import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evts")
export default class EvtController {
  @operation({
    summary: "Get Evts",
  })
  @get()
  static getEvts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Evt",
  })
  @post("{id}")
  static createEvt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
