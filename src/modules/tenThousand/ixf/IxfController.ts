import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixf")
export default class IxfController {
  @operation({
    summary: "Get Ixf",
  })
  @get()
  static getIxf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ixf",
  })
  @post("{id}")
  static createIxf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
