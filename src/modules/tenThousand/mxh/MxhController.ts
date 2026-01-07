import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxh")
export default class MxhController {
  @operation({
    summary: "Get Mxh",
  })
  @get()
  static getMxh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mxh",
  })
  @post("{id}")
  static createMxh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
