import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cx")
export default class CxController {
  @operation({
    summary: "Get Cx",
  })
  @get()
  static getCx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cx",
  })
  @post("{id}")
  static createCx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
