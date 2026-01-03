import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evps")
export default class EvpController {
  @operation({
    summary: "Get Evps",
  })
  @get()
  static getEvps = procedure({
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
