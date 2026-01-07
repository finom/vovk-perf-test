import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewp")
export default class EwpController {
  @operation({
    summary: "Get Ewp",
  })
  @get()
  static getEwp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ewp",
  })
  @post("{id}")
  static createEwp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
