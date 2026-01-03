import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lngs")
export default class LngController {
  @operation({
    summary: "Get Lngs",
  })
  @get()
  static getLngs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lng",
  })
  @post("{id}")
  static createLng = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
