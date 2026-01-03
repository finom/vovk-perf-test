import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aems")
export default class AemController {
  @operation({
    summary: "Get Aems",
  })
  @get()
  static getAems = procedure({
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
