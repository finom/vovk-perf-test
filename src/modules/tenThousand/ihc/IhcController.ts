import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihcs")
export default class IhcController {
  @operation({
    summary: "Get Ihcs",
  })
  @get()
  static getIhcs = procedure({
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
