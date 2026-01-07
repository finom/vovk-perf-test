import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gb")
export default class GbController {
  @operation({
    summary: "Get Gb",
  })
  @get()
  static getGb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gb",
  })
  @post("{id}")
  static createGb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
