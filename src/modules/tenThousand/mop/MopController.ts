import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mops")
export default class MopController {
  @operation({
    summary: "Get Mops",
  })
  @get()
  static getMops = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mop",
  })
  @post("{id}")
  static createMop = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
