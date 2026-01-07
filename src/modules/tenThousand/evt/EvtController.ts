import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evt")
export default class EvtController {
  @operation({
    summary: "Get Evt",
  })
  @get()
  static getEvt = procedure({
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
