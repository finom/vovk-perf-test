import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvp")
export default class FvpController {
  @operation({
    summary: "Get Fvp",
  })
  @get()
  static getFvp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fvp",
  })
  @post("{id}")
  static createFvp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
