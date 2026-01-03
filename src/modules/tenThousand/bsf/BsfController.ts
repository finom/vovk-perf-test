import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bsfs")
export default class BsfController {
  @operation({
    summary: "Get Bsfs",
  })
  @get()
  static getBsfs = procedure({
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
