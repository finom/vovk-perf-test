import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpt")
export default class HptController {
  @operation({
    summary: "Get Hpt",
  })
  @get()
  static getHpt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hpt",
  })
  @post("{id}")
  static createHpt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
