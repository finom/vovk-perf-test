import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mop")
export default class MopController {
  @operation({
    summary: "Get Mop",
  })
  @get()
  static getMop = procedure({
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
