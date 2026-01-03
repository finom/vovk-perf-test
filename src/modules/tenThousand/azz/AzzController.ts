import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azzes")
export default class AzzController {
  @operation({
    summary: "Get Azzes",
  })
  @get()
  static getAzzes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Azz",
  })
  @post("{id}")
  static createAzz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
