import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gnk")
export default class GnkController {
  @operation({
    summary: "Get Gnk",
  })
  @get()
  static getGnk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gnk",
  })
  @post("{id}")
  static createGnk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
