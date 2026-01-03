import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hrts")
export default class HrtController {
  @operation({
    summary: "Get Hrts",
  })
  @get()
  static getHrts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hrt",
  })
  @post("{id}")
  static createHrt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
