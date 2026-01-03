import { procedure, prefix, get, post, operation } from "vovk";

@prefix("emds")
export default class EmdController {
  @operation({
    summary: "Get Emds",
  })
  @get()
  static getEmds = procedure({
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
