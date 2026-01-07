import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bsf")
export default class BsfController {
  @operation({
    summary: "Get Bsf",
  })
  @get()
  static getBsf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bsf",
  })
  @post("{id}")
  static createBsf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
