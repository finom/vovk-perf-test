import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpr")
export default class HprController {
  @operation({
    summary: "Get Hpr",
  })
  @get()
  static getHpr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hpr",
  })
  @post("{id}")
  static createHpr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
