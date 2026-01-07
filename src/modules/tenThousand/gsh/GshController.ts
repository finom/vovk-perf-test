import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsh")
export default class GshController {
  @operation({
    summary: "Get Gsh",
  })
  @get()
  static getGsh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gsh",
  })
  @post("{id}")
  static createGsh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
