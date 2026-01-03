import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gces")
export default class GceController {
  @operation({
    summary: "Get Gces",
  })
  @get()
  static getGces = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gce",
  })
  @post("{id}")
  static createGce = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
