import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ese")
export default class EseController {
  @operation({
    summary: "Get Ese",
  })
  @get()
  static getEse = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ese",
  })
  @post("{id}")
  static createEse = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
