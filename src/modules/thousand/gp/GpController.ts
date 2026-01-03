import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gps")
export default class GpController {
  @operation({
    summary: "Get Gps",
  })
  @get()
  static getGps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gp",
  })
  @post("{id}")
  static createGp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
