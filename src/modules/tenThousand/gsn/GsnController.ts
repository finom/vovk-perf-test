import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsn")
export default class GsnController {
  @operation({
    summary: "Get Gsn",
  })
  @get()
  static getGsn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gsn",
  })
  @post("{id}")
  static createGsn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
