import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipr")
export default class IprController {
  @operation({
    summary: "Get Ipr",
  })
  @get()
  static getIpr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ipr",
  })
  @post("{id}")
  static createIpr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
