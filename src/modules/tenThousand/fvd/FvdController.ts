import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvds")
export default class FvdController {
  @operation({
    summary: "Get Fvds",
  })
  @get()
  static getFvds = procedure({
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
