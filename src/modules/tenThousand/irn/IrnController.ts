import { procedure, prefix, get, post, operation } from "vovk";

@prefix("irns")
export default class IrnController {
  @operation({
    summary: "Get Irns",
  })
  @get()
  static getIrns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Irn",
  })
  @post("{id}")
  static createIrn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
