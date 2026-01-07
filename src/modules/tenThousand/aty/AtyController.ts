import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aty")
export default class AtyController {
  @operation({
    summary: "Get Aty",
  })
  @get()
  static getAty = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aty",
  })
  @post("{id}")
  static createAty = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
