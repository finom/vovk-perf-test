import { procedure, prefix, get, post, operation } from "vovk";

@prefix("acbs")
export default class AcbController {
  @operation({
    summary: "Get Acbs",
  })
  @get()
  static getAcbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Acb",
  })
  @post("{id}")
  static createAcb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
