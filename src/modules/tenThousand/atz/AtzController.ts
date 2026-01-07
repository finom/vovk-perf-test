import { procedure, prefix, get, post, operation } from "vovk";

@prefix("atz")
export default class AtzController {
  @operation({
    summary: "Get Atz",
  })
  @get()
  static getAtz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Atz",
  })
  @post("{id}")
  static createAtz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
