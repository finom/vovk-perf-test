import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbe")
export default class GbeController {
  @operation({
    summary: "Get Gbe",
  })
  @get()
  static getGbe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gbe",
  })
  @post("{id}")
  static createGbe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
