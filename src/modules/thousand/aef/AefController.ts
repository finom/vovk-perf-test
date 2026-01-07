import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aef")
export default class AefController {
  @operation({
    summary: "Get Aef",
  })
  @get()
  static getAef = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aef",
  })
  @post("{id}")
  static createAef = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
