import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfts")
export default class CftController {
  @operation({
    summary: "Get Cfts",
  })
  @get()
  static getCfts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cft",
  })
  @post("{id}")
  static createCft = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
