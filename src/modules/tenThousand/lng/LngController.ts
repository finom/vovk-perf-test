import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lng")
export default class LngController {
  @operation({
    summary: "Get Lng",
  })
  @get()
  static getLng = procedure({
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
