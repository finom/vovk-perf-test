import { procedure, prefix, get, post, operation } from "vovk";

@prefix("htd")
export default class HtdController {
  @operation({
    summary: "Get Htd",
  })
  @get()
  static getHtd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Htd",
  })
  @post("{id}")
  static createHtd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
