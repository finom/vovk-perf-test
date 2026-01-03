import { procedure, prefix, get, post, operation } from "vovk";

@prefix("htvs")
export default class HtvController {
  @operation({
    summary: "Get Htvs",
  })
  @get()
  static getHtvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Htv",
  })
  @post("{id}")
  static createHtv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
