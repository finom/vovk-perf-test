import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bsq")
export default class BsqController {
  @operation({
    summary: "Get Bsq",
  })
  @get()
  static getBsq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bsq",
  })
  @post("{id}")
  static createBsq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
