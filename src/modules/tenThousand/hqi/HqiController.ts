import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqis")
export default class HqiController {
  @operation({
    summary: "Get Hqis",
  })
  @get()
  static getHqis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hqi",
  })
  @post("{id}")
  static createHqi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
