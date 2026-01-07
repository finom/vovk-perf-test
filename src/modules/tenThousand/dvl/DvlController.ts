import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvl")
export default class DvlController {
  @operation({
    summary: "Get Dvl",
  })
  @get()
  static getDvl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dvl",
  })
  @post("{id}")
  static createDvl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
