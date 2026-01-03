import { procedure, prefix, get, post, operation } from "vovk";

@prefix("htks")
export default class HtkController {
  @operation({
    summary: "Get Htks",
  })
  @get()
  static getHtks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Htk",
  })
  @post("{id}")
  static createHtk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
