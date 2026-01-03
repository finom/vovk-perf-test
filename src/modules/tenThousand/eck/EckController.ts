import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ecks")
export default class EckController {
  @operation({
    summary: "Get Ecks",
  })
  @get()
  static getEcks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eck",
  })
  @post("{id}")
  static createEck = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
