import { procedure, prefix, get, post, operation } from "vovk";

@prefix("emd")
export default class EmdController {
  @operation({
    summary: "Get Emd",
  })
  @get()
  static getEmd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Emd",
  })
  @post("{id}")
  static createEmd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
