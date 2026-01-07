import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihk")
export default class IhkController {
  @operation({
    summary: "Get Ihk",
  })
  @get()
  static getIhk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ihk",
  })
  @post("{id}")
  static createIhk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
