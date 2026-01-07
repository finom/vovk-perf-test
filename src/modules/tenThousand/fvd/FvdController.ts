import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvd")
export default class FvdController {
  @operation({
    summary: "Get Fvd",
  })
  @get()
  static getFvd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fvd",
  })
  @post("{id}")
  static createFvd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
