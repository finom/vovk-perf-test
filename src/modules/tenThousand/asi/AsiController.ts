import { procedure, prefix, get, post, operation } from "vovk";

@prefix("asi")
export default class AsiController {
  @operation({
    summary: "Get Asi",
  })
  @get()
  static getAsi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Asi",
  })
  @post("{id}")
  static createAsi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
