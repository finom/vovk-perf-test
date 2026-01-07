import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezj")
export default class EzjController {
  @operation({
    summary: "Get Ezj",
  })
  @get()
  static getEzj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ezj",
  })
  @post("{id}")
  static createEzj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
