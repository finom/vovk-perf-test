import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bsls")
export default class BslController {
  @operation({
    summary: "Get Bsls",
  })
  @get()
  static getBsls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bsl",
  })
  @post("{id}")
  static createBsl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
