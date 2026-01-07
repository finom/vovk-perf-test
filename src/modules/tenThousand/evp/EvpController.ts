import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evp")
export default class EvpController {
  @operation({
    summary: "Get Evp",
  })
  @get()
  static getEvp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Evp",
  })
  @post("{id}")
  static createEvp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
