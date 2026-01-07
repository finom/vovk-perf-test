import { procedure, prefix, get, post, operation } from "vovk";

@prefix("adq")
export default class AdqController {
  @operation({
    summary: "Get Adq",
  })
  @get()
  static getAdq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Adq",
  })
  @post("{id}")
  static createAdq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
