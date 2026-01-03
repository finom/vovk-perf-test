import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hms")
export default class HmsController {
  @operation({
    summary: "Get Hms",
  })
  @get()
  static getHms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hms",
  })
  @post("{id}")
  static createHms = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
