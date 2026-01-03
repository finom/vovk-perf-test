import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdps")
export default class GdpController {
  @operation({
    summary: "Get Gdps",
  })
  @get()
  static getGdps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gdp",
  })
  @post("{id}")
  static createGdp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
