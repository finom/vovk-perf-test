import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lss")
export default class LssController {
  @operation({
    summary: "Get Lss",
  })
  @get()
  static getLss = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lss",
  })
  @post("{id}")
  static createLss = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
