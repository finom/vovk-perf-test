import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eyfs")
export default class EyfController {
  @operation({
    summary: "Get Eyfs",
  })
  @get()
  static getEyfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eyf",
  })
  @post("{id}")
  static createEyf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
