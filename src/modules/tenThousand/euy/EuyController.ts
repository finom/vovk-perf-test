import { procedure, prefix, get, post, operation } from "vovk";

@prefix("euys")
export default class EuyController {
  @operation({
    summary: "Get Euys",
  })
  @get()
  static getEuys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Euy",
  })
  @post("{id}")
  static createEuy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
