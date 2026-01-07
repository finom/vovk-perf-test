import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lml")
export default class LmlController {
  @operation({
    summary: "Get Lml",
  })
  @get()
  static getLml = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lml",
  })
  @post("{id}")
  static createLml = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
