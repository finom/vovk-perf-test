import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cr")
export default class CrController {
  @operation({
    summary: "Get Cr",
  })
  @get()
  static getCr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cr",
  })
  @post("{id}")
  static createCr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
