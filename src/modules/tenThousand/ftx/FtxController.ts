import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ftx")
export default class FtxController {
  @operation({
    summary: "Get Ftx",
  })
  @get()
  static getFtx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ftx",
  })
  @post("{id}")
  static createFtx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
