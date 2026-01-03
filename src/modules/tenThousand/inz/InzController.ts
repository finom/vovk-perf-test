import { procedure, prefix, get, post, operation } from "vovk";

@prefix("inzs")
export default class InzController {
  @operation({
    summary: "Get Inzs",
  })
  @get()
  static getInzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Inz",
  })
  @post("{id}")
  static createInz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
