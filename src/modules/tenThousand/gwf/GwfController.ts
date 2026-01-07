import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwf")
export default class GwfController {
  @operation({
    summary: "Get Gwf",
  })
  @get()
  static getGwf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gwf",
  })
  @post("{id}")
  static createGwf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
