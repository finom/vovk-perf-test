import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhs")
export default class HhsController {
  @operation({
    summary: "Get Hhs",
  })
  @get()
  static getHhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hhs",
  })
  @post("{id}")
  static createHhs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
