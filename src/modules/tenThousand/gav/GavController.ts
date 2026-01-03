import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gavs")
export default class GavController {
  @operation({
    summary: "Get Gavs",
  })
  @get()
  static getGavs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gav",
  })
  @post("{id}")
  static createGav = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
