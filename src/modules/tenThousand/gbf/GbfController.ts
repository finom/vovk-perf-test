import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbfs")
export default class GbfController {
  @operation({
    summary: "Get Gbfs",
  })
  @get()
  static getGbfs = procedure({
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
