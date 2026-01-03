import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ftjs")
export default class FtjController {
  @operation({
    summary: "Get Ftjs",
  })
  @get()
  static getFtjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ftj",
  })
  @post("{id}")
  static createFtj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
