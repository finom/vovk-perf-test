import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amies")
export default class AmyController {
  @operation({
    summary: "Get Amies",
  })
  @get()
  static getAmies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Amy",
  })
  @post("{id}")
  static createAmy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
