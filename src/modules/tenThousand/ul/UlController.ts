import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ul")
export default class UlController {
  @operation({
    summary: "Get Ul",
  })
  @get()
  static getUl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ul",
  })
  @post("{id}")
  static createUl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
