import { procedure, prefix, get, post, operation } from "vovk";

@prefix("icr")
export default class IcrController {
  @operation({
    summary: "Get Icr",
  })
  @get()
  static getIcr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Icr",
  })
  @post("{id}")
  static createIcr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
