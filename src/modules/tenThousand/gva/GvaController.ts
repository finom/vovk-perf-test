import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gva")
export default class GvaController {
  @operation({
    summary: "Get Gva",
  })
  @get()
  static getGva = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gva",
  })
  @post("{id}")
  static createGva = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
