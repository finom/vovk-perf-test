import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evw")
export default class EvwController {
  @operation({
    summary: "Get Evw",
  })
  @get()
  static getEvw = procedure({
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
