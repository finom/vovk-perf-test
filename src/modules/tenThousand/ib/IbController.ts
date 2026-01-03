import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibs")
export default class IbController {
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
    summary: "Create Ib",
  })
  @post("{id}")
  static createIb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
