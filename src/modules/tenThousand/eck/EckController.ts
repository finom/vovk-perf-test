import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eck")
export default class EckController {
  @operation({
    summary: "Get Eck",
  })
  @get()
  static getEck = procedure({
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
