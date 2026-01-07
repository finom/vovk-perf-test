import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hus")
export default class HusController {
  @operation({
    summary: "Get Hus",
  })
  @get()
  static getHus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hus",
  })
  @post("{id}")
  static createHus = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
