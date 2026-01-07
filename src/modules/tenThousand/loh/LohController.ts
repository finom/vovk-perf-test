import { procedure, prefix, get, post, operation } from "vovk";

@prefix("loh")
export default class LohController {
  @operation({
    summary: "Get Loh",
  })
  @get()
  static getLoh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Loh",
  })
  @post("{id}")
  static createLoh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
