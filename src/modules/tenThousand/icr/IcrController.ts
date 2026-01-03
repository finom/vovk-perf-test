import { procedure, prefix, get, post, operation } from "vovk";

@prefix("icrs")
export default class IcrController {
  @operation({
    summary: "Get Icrs",
  })
  @get()
  static getIcrs = procedure({
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
