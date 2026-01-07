import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ftm")
export default class FtmController {
  @operation({
    summary: "Get Ftm",
  })
  @get()
  static getFtm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ftm",
  })
  @post("{id}")
  static createFtm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
