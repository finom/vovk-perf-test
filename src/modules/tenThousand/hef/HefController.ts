import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hefs")
export default class HefController {
  @operation({
    summary: "Get Hefs",
  })
  @get()
  static getHefs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hef",
  })
  @post("{id}")
  static createHef = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
