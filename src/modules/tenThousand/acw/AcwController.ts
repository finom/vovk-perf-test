import { procedure, prefix, get, post, operation } from "vovk";

@prefix("acw")
export default class AcwController {
  @operation({
    summary: "Get Acw",
  })
  @get()
  static getAcw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Acw",
  })
  @post("{id}")
  static createAcw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
