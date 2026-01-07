import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gad")
export default class GadController {
  @operation({
    summary: "Get Gad",
  })
  @get()
  static getGad = procedure({
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
