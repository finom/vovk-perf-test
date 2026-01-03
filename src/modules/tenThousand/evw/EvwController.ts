import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evws")
export default class EvwController {
  @operation({
    summary: "Get Evws",
  })
  @get()
  static getEvws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Evw",
  })
  @post("{id}")
  static createEvw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
