import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gaq")
export default class GaqController {
  @operation({
    summary: "Get Gaq",
  })
  @get()
  static getGaq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gaq",
  })
  @post("{id}")
  static createGaq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
