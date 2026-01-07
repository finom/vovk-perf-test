import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lil")
export default class LilController {
  @operation({
    summary: "Get Lil",
  })
  @get()
  static getLil = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lil",
  })
  @post("{id}")
  static createLil = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
