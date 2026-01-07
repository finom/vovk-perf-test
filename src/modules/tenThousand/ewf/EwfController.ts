import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewf")
export default class EwfController {
  @operation({
    summary: "Get Ewf",
  })
  @get()
  static getEwf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ewf",
  })
  @post("{id}")
  static createEwf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
