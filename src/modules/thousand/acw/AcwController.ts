import { procedure, prefix, get, post, operation } from "vovk";

@prefix("acws")
export default class AcwController {
  @operation({
    summary: "Get Acws",
  })
  @get()
  static getAcws = procedure({
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
