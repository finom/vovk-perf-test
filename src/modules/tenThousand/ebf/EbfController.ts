import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebf")
export default class EbfController {
  @operation({
    summary: "Get Ebf",
  })
  @get()
  static getEbf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ebf",
  })
  @post("{id}")
  static createEbf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
