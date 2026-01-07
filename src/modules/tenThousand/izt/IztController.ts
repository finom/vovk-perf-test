import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izt")
export default class IztController {
  @operation({
    summary: "Get Izt",
  })
  @get()
  static getIzt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Izt",
  })
  @post("{id}")
  static createIzt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
