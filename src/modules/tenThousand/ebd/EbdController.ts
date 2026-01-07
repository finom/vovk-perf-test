import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebd")
export default class EbdController {
  @operation({
    summary: "Get Ebd",
  })
  @get()
  static getEbd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ebd",
  })
  @post("{id}")
  static createEbd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
