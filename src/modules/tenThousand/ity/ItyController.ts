import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ities")
export default class ItyController {
  @operation({
    summary: "Get Ities",
  })
  @get()
  static getIties = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ity",
  })
  @post("{id}")
  static createIty = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
