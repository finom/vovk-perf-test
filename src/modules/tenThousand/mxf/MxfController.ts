import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxf")
export default class MxfController {
  @operation({
    summary: "Get Mxf",
  })
  @get()
  static getMxf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mxf",
  })
  @post("{id}")
  static createMxf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
