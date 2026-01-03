import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aojs")
export default class AojController {
  @operation({
    summary: "Get Aojs",
  })
  @get()
  static getAojs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aoj",
  })
  @post("{id}")
  static createAoj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
