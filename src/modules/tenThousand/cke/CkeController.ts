import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ckes")
export default class CkeController {
  @operation({
    summary: "Get Ckes",
  })
  @get()
  static getCkes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cke",
  })
  @post("{id}")
  static createCke = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
