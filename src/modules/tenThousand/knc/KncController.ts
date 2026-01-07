import { procedure, prefix, get, post, operation } from "vovk";

@prefix("knc")
export default class KncController {
  @operation({
    summary: "Get Knc",
  })
  @get()
  static getKnc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Knc",
  })
  @post("{id}")
  static createKnc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
