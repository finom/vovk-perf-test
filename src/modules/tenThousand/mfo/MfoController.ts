import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfo")
export default class MfoController {
  @operation({
    summary: "Get Mfo",
  })
  @get()
  static getMfo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mfo",
  })
  @post("{id}")
  static createMfo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
