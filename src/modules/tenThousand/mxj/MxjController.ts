import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxj")
export default class MxjController {
  @operation({
    summary: "Get Mxj",
  })
  @get()
  static getMxj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mxj",
  })
  @post("{id}")
  static createMxj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
