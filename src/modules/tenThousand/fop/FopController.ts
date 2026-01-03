import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fops")
export default class FopController {
  @operation({
    summary: "Get Fops",
  })
  @get()
  static getFops = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fop",
  })
  @post("{id}")
  static createFop = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
