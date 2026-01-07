import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fsl")
export default class FslController {
  @operation({
    summary: "Get Fsl",
  })
  @get()
  static getFsl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fsl",
  })
  @post("{id}")
  static createFsl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
