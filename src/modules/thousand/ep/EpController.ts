import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ep")
export default class EpController {
  @operation({
    summary: "Get Ep",
  })
  @get()
  static getEp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ep",
  })
  @post("{id}")
  static createEp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
