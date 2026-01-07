import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwe")
export default class IweController {
  @operation({
    summary: "Get Iwe",
  })
  @get()
  static getIwe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iwe",
  })
  @post("{id}")
  static createIwe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
