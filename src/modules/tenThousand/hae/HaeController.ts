import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hae")
export default class HaeController {
  @operation({
    summary: "Get Hae",
  })
  @get()
  static getHae = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hae",
  })
  @post("{id}")
  static createHae = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
