import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezgs")
export default class EzgController {
  @operation({
    summary: "Get Ezgs",
  })
  @get()
  static getEzgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ezg",
  })
  @post("{id}")
  static createEzg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
