import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihj")
export default class IhjController {
  @operation({
    summary: "Get Ihj",
  })
  @get()
  static getIhj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ihj",
  })
  @post("{id}")
  static createIhj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
