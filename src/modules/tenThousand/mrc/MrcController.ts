import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mrc")
export default class MrcController {
  @operation({
    summary: "Get Mrc",
  })
  @get()
  static getMrc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mrc",
  })
  @post("{id}")
  static createMrc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
