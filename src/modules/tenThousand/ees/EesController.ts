import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ees")
export default class EesController {
  @operation({
    summary: "Get Ees",
  })
  @get()
  static getEes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ees",
  })
  @post("{id}")
  static createEes = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
