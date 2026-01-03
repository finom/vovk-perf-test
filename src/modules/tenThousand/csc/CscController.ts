import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cscs")
export default class CscController {
  @operation({
    summary: "Get Cscs",
  })
  @get()
  static getCscs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Csc",
  })
  @post("{id}")
  static createCsc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
