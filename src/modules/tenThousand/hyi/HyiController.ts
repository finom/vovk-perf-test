import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hyi")
export default class HyiController {
  @operation({
    summary: "Get Hyi",
  })
  @get()
  static getHyi = procedure({
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
