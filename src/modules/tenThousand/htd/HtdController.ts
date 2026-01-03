import { procedure, prefix, get, post, operation } from "vovk";

@prefix("htds")
export default class HtdController {
  @operation({
    summary: "Get Htds",
  })
  @get()
  static getHtds = procedure({
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
