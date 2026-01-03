import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hyis")
export default class HyiController {
  @operation({
    summary: "Get Hyis",
  })
  @get()
  static getHyis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hyi",
  })
  @post("{id}")
  static createHyi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
