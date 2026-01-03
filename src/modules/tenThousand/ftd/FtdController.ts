import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ftds")
export default class FtdController {
  @operation({
    summary: "Get Ftds",
  })
  @get()
  static getFtds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ftd",
  })
  @post("{id}")
  static createFtd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
