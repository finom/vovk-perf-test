import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihd")
export default class IhdController {
  @operation({
    summary: "Get Ihd",
  })
  @get()
  static getIhd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ihd",
  })
  @post("{id}")
  static createIhd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
