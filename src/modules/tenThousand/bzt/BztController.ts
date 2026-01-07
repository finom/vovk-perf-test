import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzt")
export default class BztController {
  @operation({
    summary: "Get Bzt",
  })
  @get()
  static getBzt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bzt",
  })
  @post("{id}")
  static createBzt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
