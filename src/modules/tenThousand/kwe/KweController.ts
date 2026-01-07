import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwe")
export default class KweController {
  @operation({
    summary: "Get Kwe",
  })
  @get()
  static getKwe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kwe",
  })
  @post("{id}")
  static createKwe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
