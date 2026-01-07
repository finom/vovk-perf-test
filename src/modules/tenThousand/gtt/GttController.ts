import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gtt")
export default class GttController {
  @operation({
    summary: "Get Gtt",
  })
  @get()
  static getGtt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gtt",
  })
  @post("{id}")
  static createGtt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
