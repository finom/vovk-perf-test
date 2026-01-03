import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hogs")
export default class HogController {
  @operation({
    summary: "Get Hogs",
  })
  @get()
  static getHogs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hog",
  })
  @post("{id}")
  static createHog = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
