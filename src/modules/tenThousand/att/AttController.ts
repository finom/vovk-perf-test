import { procedure, prefix, get, post, operation } from "vovk";

@prefix("atts")
export default class AttController {
  @operation({
    summary: "Get Atts",
  })
  @get()
  static getAtts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Att",
  })
  @post("{id}")
  static createAtt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
