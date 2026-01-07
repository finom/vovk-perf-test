import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igv")
export default class IgvController {
  @operation({
    summary: "Get Igv",
  })
  @get()
  static getIgv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Igv",
  })
  @post("{id}")
  static createIgv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
