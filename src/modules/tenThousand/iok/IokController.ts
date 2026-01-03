import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ioks")
export default class IokController {
  @operation({
    summary: "Get Ioks",
  })
  @get()
  static getIoks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iok",
  })
  @post("{id}")
  static createIok = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
