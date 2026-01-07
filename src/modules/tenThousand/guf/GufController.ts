import { procedure, prefix, get, post, operation } from "vovk";

@prefix("guf")
export default class GufController {
  @operation({
    summary: "Get Guf",
  })
  @get()
  static getGuf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Guf",
  })
  @post("{id}")
  static createGuf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
