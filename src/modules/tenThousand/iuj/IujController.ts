import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iuj")
export default class IujController {
  @operation({
    summary: "Get Iuj",
  })
  @get()
  static getIuj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iuj",
  })
  @post("{id}")
  static createIuj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
