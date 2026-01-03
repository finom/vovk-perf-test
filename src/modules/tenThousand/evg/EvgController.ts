import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evgs")
export default class EvgController {
  @operation({
    summary: "Get Evgs",
  })
  @get()
  static getEvgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Evg",
  })
  @post("{id}")
  static createEvg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
