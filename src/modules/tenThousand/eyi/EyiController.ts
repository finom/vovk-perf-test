import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eyis")
export default class EyiController {
  @operation({
    summary: "Get Eyis",
  })
  @get()
  static getEyis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eyi",
  })
  @post("{id}")
  static createEyi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
