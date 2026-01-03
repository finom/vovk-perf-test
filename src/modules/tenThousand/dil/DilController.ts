import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dils")
export default class DilController {
  @operation({
    summary: "Get Dils",
  })
  @get()
  static getDils = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dil",
  })
  @post("{id}")
  static createDil = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
