import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvf")
export default class FvfController {
  @operation({
    summary: "Get Fvf",
  })
  @get()
  static getFvf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fvf",
  })
  @post("{id}")
  static createFvf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
