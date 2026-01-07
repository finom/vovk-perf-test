import { procedure, prefix, get, post, operation } from "vovk";

@prefix("een")
export default class EenController {
  @operation({
    summary: "Get Een",
  })
  @get()
  static getEen = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Een",
  })
  @post("{id}")
  static createEen = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
