import { procedure, prefix, get, post, operation } from "vovk";

@prefix("krm")
export default class KrmController {
  @operation({
    summary: "Get Krm",
  })
  @get()
  static getKrm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Krm",
  })
  @post("{id}")
  static createKrm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
