import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ons")
export default class OnController {
  @operation({
    summary: "Get Ons",
  })
  @get()
  static getOns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create On",
  })
  @post("{id}")
  static createOn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
