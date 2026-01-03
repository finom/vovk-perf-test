import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdus")
export default class HduController {
  @operation({
    summary: "Get Hdus",
  })
  @get()
  static getHdus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hdu",
  })
  @post("{id}")
  static createHdu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
