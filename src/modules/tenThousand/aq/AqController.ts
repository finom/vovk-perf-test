import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aq")
export default class AqController {
  @operation({
    summary: "Get Aq",
  })
  @get()
  static getAq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aq",
  })
  @post("{id}")
  static createAq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
