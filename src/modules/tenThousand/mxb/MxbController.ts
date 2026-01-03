import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxbs")
export default class MxbController {
  @operation({
    summary: "Get Mxbs",
  })
  @get()
  static getMxbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mxb",
  })
  @post("{id}")
  static createMxb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
