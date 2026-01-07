import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aem")
export default class AemController {
  @operation({
    summary: "Get Aem",
  })
  @get()
  static getAem = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aem",
  })
  @post("{id}")
  static createAem = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
