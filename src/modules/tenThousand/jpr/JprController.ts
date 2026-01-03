import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jprs")
export default class JprController {
  @operation({
    summary: "Get Jprs",
  })
  @get()
  static getJprs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jpr",
  })
  @post("{id}")
  static createJpr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
