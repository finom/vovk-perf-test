import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dches")
export default class DchController {
  @operation({
    summary: "Get Dches",
  })
  @get()
  static getDches = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dch",
  })
  @post("{id}")
  static createDch = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
