import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iis")
export default class IisController {
  @operation({
    summary: "Get Iis",
  })
  @get()
  static getIis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iis",
  })
  @post("{id}")
  static createIis = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
