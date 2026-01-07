import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixy")
export default class IxyController {
  @operation({
    summary: "Get Ixy",
  })
  @get()
  static getIxy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ixy",
  })
  @post("{id}")
  static createIxy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
