import { procedure, prefix, get, post, operation } from "vovk";

@prefix("beds")
export default class BedController {
  @operation({
    summary: "Get Beds",
  })
  @get()
  static getBeds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bed",
  })
  @post("{id}")
  static createBed = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
