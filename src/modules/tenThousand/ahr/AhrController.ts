import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahrs")
export default class AhrController {
  @operation({
    summary: "Get Ahrs",
  })
  @get()
  static getAhrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ahr",
  })
  @post("{id}")
  static createAhr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
