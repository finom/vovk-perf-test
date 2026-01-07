import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvi")
export default class GviController {
  @operation({
    summary: "Get Gvi",
  })
  @get()
  static getGvi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gvi",
  })
  @post("{id}")
  static createGvi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
