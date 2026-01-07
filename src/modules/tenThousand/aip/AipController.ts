import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aip")
export default class AipController {
  @operation({
    summary: "Get Aip",
  })
  @get()
  static getAip = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aip",
  })
  @post("{id}")
  static createAip = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
