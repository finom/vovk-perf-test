import { procedure, prefix, get, post, operation } from "vovk";

@prefix("frks")
export default class FrkController {
  @operation({
    summary: "Get Frks",
  })
  @get()
  static getFrks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Frk",
  })
  @post("{id}")
  static createFrk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
