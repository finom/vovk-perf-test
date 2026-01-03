import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdies")
export default class HdyController {
  @operation({
    summary: "Get Hdies",
  })
  @get()
  static getHdies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hdy",
  })
  @post("{id}")
  static createHdy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
