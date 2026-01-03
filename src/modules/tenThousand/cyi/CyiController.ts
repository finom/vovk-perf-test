import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cyis")
export default class CyiController {
  @operation({
    summary: "Get Cyis",
  })
  @get()
  static getCyis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cyi",
  })
  @post("{id}")
  static createCyi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
