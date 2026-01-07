import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvq")
export default class FvqController {
  @operation({
    summary: "Get Fvq",
  })
  @get()
  static getFvq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fvq",
  })
  @post("{id}")
  static createFvq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
