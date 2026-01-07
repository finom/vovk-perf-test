import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ftg")
export default class FtgController {
  @operation({
    summary: "Get Ftg",
  })
  @get()
  static getFtg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ftg",
  })
  @post("{id}")
  static createFtg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
