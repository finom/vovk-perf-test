import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivt")
export default class IvtController {
  @operation({
    summary: "Get Ivt",
  })
  @get()
  static getIvt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ivt",
  })
  @post("{id}")
  static createIvt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
