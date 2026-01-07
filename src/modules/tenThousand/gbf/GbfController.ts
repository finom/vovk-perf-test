import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbf")
export default class GbfController {
  @operation({
    summary: "Get Gbf",
  })
  @get()
  static getGbf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gbf",
  })
  @post("{id}")
  static createGbf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
