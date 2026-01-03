import { procedure, prefix, get, post, operation } from "vovk";

@prefix("itts")
export default class IttController {
  @operation({
    summary: "Get Itts",
  })
  @get()
  static getItts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Itt",
  })
  @post("{id}")
  static createItt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
