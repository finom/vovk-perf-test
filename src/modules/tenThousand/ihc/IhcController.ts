import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihc")
export default class IhcController {
  @operation({
    summary: "Get Ihc",
  })
  @get()
  static getIhc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ihc",
  })
  @post("{id}")
  static createIhc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
