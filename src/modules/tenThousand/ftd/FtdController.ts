import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ftd")
export default class FtdController {
  @operation({
    summary: "Get Ftd",
  })
  @get()
  static getFtd = procedure({
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
