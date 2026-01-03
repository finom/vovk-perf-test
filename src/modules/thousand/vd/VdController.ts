import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vds")
export default class VdController {
  @operation({
    summary: "Get Vds",
  })
  @get()
  static getVds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Vd",
  })
  @post("{id}")
  static createVd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
