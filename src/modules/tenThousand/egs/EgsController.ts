import { procedure, prefix, get, post, operation } from "vovk";

@prefix("egs")
export default class EgsController {
  @operation({
    summary: "Get Egs",
  })
  @get()
  static getEgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Egs",
  })
  @post("{id}")
  static createEgs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
