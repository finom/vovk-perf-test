import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bed")
export default class BedController {
  @operation({
    summary: "Get Bed",
  })
  @get()
  static getBed = procedure({
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
