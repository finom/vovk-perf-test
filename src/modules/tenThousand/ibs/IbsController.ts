import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibs")
export default class IbsController {
  @operation({
    summary: "Get Ibs",
  })
  @get()
  static getIbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ibs",
  })
  @post("{id}")
  static createIbs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
