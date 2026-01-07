import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebz")
export default class EbzController {
  @operation({
    summary: "Get Ebz",
  })
  @get()
  static getEbz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ebz",
  })
  @post("{id}")
  static createEbz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
