import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebrs")
export default class EbrController {
  @operation({
    summary: "Get Ebrs",
  })
  @get()
  static getEbrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ebr",
  })
  @post("{id}")
  static createEbr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
