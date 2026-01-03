import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ftfs")
export default class FtfController {
  @operation({
    summary: "Get Ftfs",
  })
  @get()
  static getFtfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ftf",
  })
  @post("{id}")
  static createFtf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
