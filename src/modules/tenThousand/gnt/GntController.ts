import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gnt")
export default class GntController {
  @operation({
    summary: "Get Gnt",
  })
  @get()
  static getGnt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gnt",
  })
  @post("{id}")
  static createGnt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
