import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cab")
export default class CabController {
  @operation({
    summary: "Get Cab",
  })
  @get()
  static getCab = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cab",
  })
  @post("{id}")
  static createCab = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
