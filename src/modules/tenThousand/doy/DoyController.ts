import { procedure, prefix, get, post, operation } from "vovk";

@prefix("doys")
export default class DoyController {
  @operation({
    summary: "Get Doys",
  })
  @get()
  static getDoys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Doy",
  })
  @post("{id}")
  static createDoy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
