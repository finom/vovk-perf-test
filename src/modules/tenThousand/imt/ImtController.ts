import { procedure, prefix, get, post, operation } from "vovk";

@prefix("imt")
export default class ImtController {
  @operation({
    summary: "Get Imt",
  })
  @get()
  static getImt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Imt",
  })
  @post("{id}")
  static createImt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
