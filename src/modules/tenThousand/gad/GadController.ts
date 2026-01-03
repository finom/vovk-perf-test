import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gads")
export default class GadController {
  @operation({
    summary: "Get Gads",
  })
  @get()
  static getGads = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gad",
  })
  @post("{id}")
  static createGad = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
