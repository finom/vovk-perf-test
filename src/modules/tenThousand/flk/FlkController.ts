import { procedure, prefix, get, post, operation } from "vovk";

@prefix("flks")
export default class FlkController {
  @operation({
    summary: "Get Flks",
  })
  @get()
  static getFlks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Flk",
  })
  @post("{id}")
  static createFlk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
