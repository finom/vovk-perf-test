import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iuses")
export default class IusController {
  @operation({
    summary: "Get Iuses",
  })
  @get()
  static getIuses = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ius",
  })
  @post("{id}")
  static createIus = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
