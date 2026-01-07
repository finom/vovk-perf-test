import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ftb")
export default class FtbController {
  @operation({
    summary: "Get Ftb",
  })
  @get()
  static getFtb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ftb",
  })
  @post("{id}")
  static createFtb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
