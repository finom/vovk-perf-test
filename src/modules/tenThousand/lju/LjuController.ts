import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lju")
export default class LjuController {
  @operation({
    summary: "Get Lju",
  })
  @get()
  static getLju = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lju",
  })
  @post("{id}")
  static createLju = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
