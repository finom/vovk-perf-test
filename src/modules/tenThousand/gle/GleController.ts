import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gle")
export default class GleController {
  @operation({
    summary: "Get Gle",
  })
  @get()
  static getGle = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gle",
  })
  @post("{id}")
  static createGle = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
