import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lry")
export default class LryController {
  @operation({
    summary: "Get Lry",
  })
  @get()
  static getLry = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lry",
  })
  @post("{id}")
  static createLry = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
